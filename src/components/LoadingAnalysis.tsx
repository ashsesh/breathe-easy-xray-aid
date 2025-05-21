
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingAnalysis = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
        <div className="h-16 w-16 relative">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <h3 className="text-lg font-semibold">Analyzing X-Ray</h3>
        <div className="w-full max-w-xs space-y-2">
          <div className="flex justify-between text-sm">
            <span>Processing image...</span>
            <span className="animate-pulse-opacity">Please wait</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-2/3 animate-pulse"></div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          Our AI model is analyzing your chest X-ray image for signs of pneumonia.
          This usually takes a few seconds.
        </p>
      </CardContent>
    </Card>
  );
};

export default LoadingAnalysis;
