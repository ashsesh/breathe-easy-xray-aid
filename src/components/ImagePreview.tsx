
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ImagePreviewProps {
  imageUrl: string;
  onConfirm: () => void;
  onReupload: () => void;
  isAnalyzing: boolean;
}

const ImagePreview = ({ imageUrl, onConfirm, onReupload, isAnalyzing }: ImagePreviewProps) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-center">Review X-Ray Image</h3>
        <div className="bg-black rounded-md overflow-hidden">
          <img 
            src={imageUrl} 
            alt="Uploaded X-ray" 
            className="mx-auto max-h-96 object-contain"
          />
        </div>
        <p className="text-sm text-center text-muted-foreground">
          Please confirm this is the correct X-ray image you want to analyze.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={onReupload} disabled={isAnalyzing}>
            Re-Upload
          </Button>
          <Button onClick={onConfirm} disabled={isAnalyzing}>
            {isAnalyzing ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </span>
            ) : (
              'Analyze Image'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImagePreview;
