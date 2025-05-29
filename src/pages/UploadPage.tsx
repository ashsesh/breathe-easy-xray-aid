
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import ImagePreview from '@/components/ImagePreview';
import { toast } from 'sonner';

const UploadPage = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'preview'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');

  const handleImageSelected = (file: File) => {
    setSelectedFile(file);
    setImagePreviewUrl(URL.createObjectURL(file));
    setCurrentStep('preview');
  };

  const handleAnalyzeImage = async () => {
    if (!selectedFile) return;
    
    toast.info('AI analysis feature will be implemented soon!');
  };

  const resetToUpload = () => {
    setSelectedFile(null);
    setImagePreviewUrl('');
    setCurrentStep('upload');
    
    // Clean up the object URL to avoid memory leaks
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Chest X-Ray Analysis</h1>
              <p className="text-gray-600">Upload your chest X-ray image for pneumonia detection</p>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-blue-800">
                <p className="text-sm">🚧 AI analysis feature coming soon!</p>
              </div>
            </div>

            {/* Steps indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === 'upload' ? 'bg-medical-600 text-white' : 'bg-medical-100 text-medical-600'}`}>
                  1
                </div>
                <div className={`h-1 w-12 ${currentStep === 'upload' ? 'bg-gray-300' : 'bg-medical-400'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === 'preview' ? 'bg-medical-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
              </div>
            </div>

            {/* Step content */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {currentStep === 'upload' && (
                <ImageUploader onImageSelected={handleImageSelected} isLoading={false} />
              )}
              
              {currentStep === 'preview' && imagePreviewUrl && (
                <ImagePreview 
                  imageUrl={imagePreviewUrl} 
                  onConfirm={handleAnalyzeImage}
                  onReupload={resetToUpload}
                  isAnalyzing={false}
                />
              )}
            </div>
            
            {/* Guidelines */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Guidelines for X-Ray Upload</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>File formats: JPG, PNG</li>
                    <li>Maximum file size: 10MB</li>
                    <li>Frontal (anterior-posterior or posterior-anterior) chest X-ray</li>
                    <li>Good image quality (not blurry or overexposed)</li>
                    <li>No additional annotations or markings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Best Practices:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Ensure the entire lung field is visible</li>
                    <li>Remove any personally identifiable information</li>
                    <li>Use images taken within the last 12 months</li>
                    <li>Avoid images with other medical devices visible (like pacemakers)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-sm">
              <h3 className="font-semibold text-amber-800 mb-1">Medical Disclaimer</h3>
              <p className="text-amber-700">
                This tool is designed for educational and screening purposes only. It is not a substitute for 
                professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
                or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UploadPage;
