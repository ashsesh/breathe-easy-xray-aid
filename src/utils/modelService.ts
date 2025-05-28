
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
    console.log('Base URL:', window.location.origin);
    
    // Try multiple possible paths for H5 model
    const h5Paths = [
      '/pneumonia-model.h5',
      './pneumonia-model.h5',
      '/public/pneumonia-model.h5'
    ];
    
    for (const h5Path of h5Paths) {
      try {
        console.log(`Attempting to load H5 model from: ${h5Path}`);
        
        // Check if the file exists first
        const response = await fetch(h5Path);
        console.log(`File fetch response for ${h5Path}:`, {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          type: response.type,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        if (response.ok) {
          console.log(`H5 file found at ${h5Path}, attempting to load model...`);
          // Load H5 model directly from public directory
          model = await tf.loadLayersModel(h5Path);
          console.log('H5 Model loaded successfully! 🎉');
          console.log('Model input shape:', model.inputs[0].shape);
          console.log('Model output shape:', model.outputs[0].shape);
          return true;
        } else {
          console.log(`H5 file not found at ${h5Path} (${response.status})`);
        }
      } catch (h5Error) {
        console.error(`H5 model loading failed for ${h5Path}:`, h5Error);
      }
    }
    
    // Try multiple possible paths for JSON model
    const jsonPaths = [
      '/models/pneumonia-model/model.json',
      './models/pneumonia-model/model.json',
      '/public/models/pneumonia-model/model.json'
    ];
    
    for (const jsonPath of jsonPaths) {
      try {
        console.log(`Attempting to load JSON model from: ${jsonPath}`);
        
        // Check if the file exists first
        const response = await fetch(jsonPath);
        console.log(`File fetch response for ${jsonPath}:`, {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          type: response.type
        });
        
        if (response.ok) {
          console.log(`JSON model file found at ${jsonPath}, attempting to load model...`);
          model = await tf.loadLayersModel(jsonPath);
          console.log('JSON Model loaded successfully! 🎉');
          console.log('Model input shape:', model.inputs[0].shape);
          console.log('Model output shape:', model.outputs[0].shape);
          return true;
        } else {
          console.log(`JSON model file not found at ${jsonPath} (${response.status})`);
        }
      } catch (jsonError) {
        console.error(`JSON model loading failed for ${jsonPath}:`, jsonError);
      }
    }
    
    throw new Error('No model files could be found or loaded');
    
  } catch (error) {
    console.error('Failed to load any model:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return false;
  }
}

/**
 * Prepare the image for the AI (like cleaning vegetables before cooking)
 */
function preprocessImage(imageElement: HTMLImageElement): tf.Tensor {
  // Convert image to tensor and resize to what the model expects
  return tf.tidy(() => {
    // Turn image into numbers the AI can understand
    const tensor = tf.browser.fromPixels(imageElement);
    
    // Resize to 224x224 (most medical models use this size)
    const resized = tf.image.resizeBilinear(tensor, [224, 224]);
    
    // Convert to grayscale if needed (many X-ray models expect this)
    const grayscale = tf.mean(resized, 2, true);
    
    // Normalize pixel values to 0-1 range (like converting to percentages)
    const normalized = grayscale.div(255.0);
    
    // Add batch dimension (the AI expects a batch of images, even if it's just one)
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
