
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface AnalysisResultsProps {
  result: 'normal' | 'pneumonia';
  confidence: number;
  imageUrl: string;
  onAnalyzeAnother: () => void;
}

const AnalysisResults = ({ result, confidence, imageUrl, onAnalyzeAnother }: AnalysisResultsProps) => {
  const isPneumonia = result === 'pneumonia';
  const probabilityData = [
    { name: 'Normal', probability: isPneumonia ? 100 - confidence : confidence },
    { name: 'Pneumonia', probability: isPneumonia ? confidence : 100 - confidence },
  ];

  return (
    <div className="space-y-6">
      <Card className={`border-2 ${isPneumonia ? 'border-red-500' : 'border-green-500'}`}>
        <CardHeader className={`${isPneumonia ? 'bg-red-50' : 'bg-green-50'}`}>
          <CardTitle className="text-center text-2xl">
            {isPneumonia ? 'Pneumonia Detected' : 'No Pneumonia Detected'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Result:</h3>
                <div
                  className={`text-lg font-medium p-3 rounded-md ${
                    isPneumonia ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}
                >
                  {isPneumonia ? 'Pneumonia Detected' : 'Normal (No Pneumonia)'}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Confidence Score:</h3>
                <div className="h-2.5 w-full bg-gray-200 rounded-full">
                  <div 
                    className={`h-2.5 rounded-full ${isPneumonia ? 'bg-red-600' : 'bg-green-600'}`}
                    style={{ width: `${confidence}%` }}
                  ></div>
                </div>
                <p className="text-right font-medium">{confidence.toFixed(1)}%</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Probability Distribution:</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={probabilityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Bar 
                        dataKey="probability" 
                        fill={isPneumonia ? "#ef4444" : "#22c55e"} 
                        name="Probability (%)" 
                        label={{ position: 'top' }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">X-ray Image:</h3>
                <div className="bg-black rounded-md overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt="Analyzed X-ray" 
                    className="mx-auto max-h-64 object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Recommended Next Steps:</h3>
                {isPneumonia ? (
                  <ul className="list-disc pl-5 space-y-1 text-red-800">
                    <li>Consult a healthcare professional immediately</li>
                    <li>Seek medical attention for proper diagnosis</li>
                    <li>Follow your doctor's treatment recommendations</li>
                  </ul>
                ) : (
                  <ul className="list-disc pl-5 space-y-1 text-green-800">
                    <li>Continue routine health monitoring</li>
                    <li>Consult a doctor if symptoms develop</li>
                    <li>Practice good respiratory hygiene</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <h3 className="font-semibold">Disclaimer:</h3>
            <p className="text-sm text-gray-500">
              This tool is designed for educational and screening purposes only. It is not a substitute for 
              professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
              or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button onClick={onAnalyzeAnother} variant="outline">
              Analyze Another Image
            </Button>
            <Button asChild>
              <Link to="/education">Learn About Pneumonia</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisResults;
