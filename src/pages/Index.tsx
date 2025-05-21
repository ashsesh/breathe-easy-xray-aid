
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-600 to-medical-800 text-white py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  AI-Powered Pneumonia Detection from Chest X-Rays
                </h1>
                <p className="text-xl text-medical-100 md:pr-10">
                  Upload your chest X-ray image and get an instant analysis using our advanced AI technology.
                  Early detection saves lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="font-medium">
                    <Link to="/upload">Upload Chest X-Ray</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 text-white font-medium">
                    <Link to="/education">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-white/10 rounded-lg -rotate-3 transform"></div>
                <img
                  src="https://img.freepik.com/free-photo/doctor-examines-x-ray-patient-lungs-hospital_1150-6198.jpg"
                  alt="Doctor examining chest x-ray"
                  className="rounded-lg relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                    <line x1="16" x2="22" y1="5" y2="5" />
                    <line x1="19" x2="19" y1="2" y2="8" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">1. Upload X-Ray</h3>
                <p className="text-gray-500">
                  Upload a digital chest X-ray image in JPG or PNG format. It's quick and secure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">2. AI Analysis</h3>
                <p className="text-gray-500">
                  Our machine learning algorithm analyzes the X-ray image for signs of pneumonia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">3. View Results</h3>
                <p className="text-gray-500">
                  Get instant results with detection confidence and recommended next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Pneumonia Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/doctor-examining-patient-lung-x-ray-film-medical-report_53876-15906.jpg"
                  alt="Doctor examining chest x-ray"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">About Pneumonia</h2>
                <p className="text-gray-600">
                  Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid.
                  It can be life-threatening, especially for infants, children, and people over 65.
                </p>
                <h3 className="text-xl font-semibold">Common Symptoms</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Chest pain when breathing or coughing</li>
                  <li>Confusion or changes in mental awareness (in adults age 65 and older)</li>
                  <li>Cough, which may produce phlegm</li>
                  <li>Fatigue and fever</li>
                  <li>Lower than normal body temperature (in adults older than age 65 and people with weak immune systems)</li>
                  <li>Shortness of breath</li>
                </ul>
                <Button asChild variant="outline">
                  <Link to="/education">Learn More About Pneumonia</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-medical-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Analyze Your X-Ray?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our AI tool can help provide a preliminary assessment of chest X-rays for signs of pneumonia.
              Remember, this tool is meant for educational and screening purposes only.
            </p>
            <Button asChild size="lg" variant="default" className="bg-white text-medical-600 hover:bg-gray-100">
              <Link to="/upload">Upload X-Ray Now</Link>
            </Button>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-amber-700">
                This tool is designed for educational and screening purposes only. It is not a substitute for 
                professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
                or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
