import * as tf from '@tensorflow/tfjs';

// This will hold our loaded model
let model: tf.LayersModel | null = null;

/**
 * Load the AI model (like opening a toy box)
 */
export async function loadModel(): Promise<boolean> {
  try {
    console.log('Loading AI model...');
    console.log('TensorFlow.js version:', tf.version);
    console.log('Current URL:', window.location.href);
    
    // First try the JSON model (more reliable for web)
    try {
      console.log('Attempting to load JSON model from: /models/pneumonia-model/model.json');
      
      // Check if the model.json file exists
      const response = await fetch('/models/pneumonia-model/model.json');
      console.log('JSON model fetch response:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url
      });
      
      if (response.ok) {
        console.log('JSON model file found, attempting to load...');
        model = await tf.loadLayersModel('/models/pneumonia-model/model.json');
        console.log('JSON Model loaded successfully! 🎉');
        console.log('Model input shape:', model.inputs[0].shape);
        console.log('Model output shape:', model.outputs[0].shape);
        return true;
      }
    } catch (jsonError) {
      console.error('JSON model loading failed:', jsonError);
    }
    
    // Fallback to H5 model if JSON fails
    try {
      console.log('Attempting to load H5 model from: /pneumonia-model.h5');
      
      const response = await fetch('/pneumonia-model.h5');
      console.log('H5 model fetch response:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url
      });
      
      if (response.ok) {
        console.log('H5 file found, attempting to load...');
        // Note: H5 models need to be converted to work properly in browsers
        model = await tf.loadLayersModel('/pneumonia-model.h5');
        console.log('H5 Model loaded successfully! 🎉');
        console.log('Model input shape:', model.inputs[0].shape);
        console.log('Model output shape:', model.outputs[0].shape);
        return true;
      }
    } catch (h5Error) {
      console.error('H5 model loading failed:', h5Error);
    }
    
    throw new Error('No model files could be loaded. Please check the console for details.');
    
  } catch (error) {
    console.error('Failed to load any model:', error);
    return false;
  }
}

/**
 * Prepare the image for the AI (adjusted for your model's expected input)
 */
function preprocessImage(imageElement: HTMLImageElement): tf.Tensor {
  return tf.tidy(() => {
    // Convert image to tensor
    const tensor = tf.browser.fromPixels(imageElement);
    
    // Your model expects 150x150x3 based on the model.json
    const resized = tf.image.resizeBilinear(tensor, [150, 150]);
    
    // Keep RGB channels (don't convert to grayscale since model expects 3 channels)
    const normalized = resized.div(255.0);
    
    // Add batch dimension
    const batched = normalized.expandDims(0);
    
    return batched;
  });
}

/**
 * Analyze the X-ray image for pneumonia
 */
export async function analyzePneumonia(imageFile: File): Promise<{
  result: 'normal' | 'pneumonia';
  confidence: number;
}> {
  console.log('Starting analysis for:', imageFile.name);
  
  // Load model if not already loaded
  if (!model) {
    const loaded = await loadModel();
    if (!loaded) {
      throw new Error('Failed to load AI model');
    }
  }
  
  return new Promise((resolve, reject) => {
    // Create an image element to load the file
    const img = new Image();
    
    img.onload = async () => {
      try {
        console.log('Image loaded, preprocessing...');
        
        // Prepare the image for the AI
        const preprocessed = preprocessImage(img);
        
        console.log('Running AI prediction...');
        
        // Ask the AI to make a prediction
        const prediction = model!.predict(preprocessed) as tf.Tensor;
        
        // Get the prediction result
        const predictionData = await prediction.data();
        
        // Clean up memory (like putting toys back in the box)
        preprocessed.dispose();
        prediction.dispose();
        
        // The prediction is usually a probability between 0 and 1
        // 0 = normal, 1 = pneumonia
        const pneumoniaProbability = predictionData[0];
        const confidence = pneumoniaProbability * 100;
        
        console.log('Prediction complete!', { pneumoniaProbability, confidence });
        
        resolve({
          result: pneumoniaProbability > 0.5 ? 'pneumonia' : 'normal',
          confidence: Math.max(confidence, 100 - confidence) // Show confidence for the predicted class
        });
        
      } catch (error) {
        console.error('Error during prediction:', error);
        reject(error);
      }
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    // Start loading the image
    img.src = URL.createObjectURL(imageFile);
  });
}
