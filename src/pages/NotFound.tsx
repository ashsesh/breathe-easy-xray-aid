
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container px-4 md:px-6 text-center max-w-md">
          <div className="space-y-6">
            <div className="w-24 h-24 bg-medical-100 rounded-full flex items-center justify-center text-medical-600 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.5 3.5 6.5 15.5"></path>
                <path d="m10 7.5 4 1 1 4"></path>
                <path d="m8 12.5-3.5 1.5c-.7.3-1 1.1-.8 1.8l1 3c.1.3.3.4.5.5l3 1c.7.3 1.5-.1 1.8-.8l1.5-3.5"></path>
                <path d="m14.5 16 1.5 3.5c.3.7 1.1 1 1.8.8l3-1c.2-.1.4-.3.5-.5l1-3c.2-.7-.1-1.5-.8-1.8L18 12.5"></path>
              </svg>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
            <p className="text-gray-600">
              Sorry, we couldn't find the page you're looking for. The page might have been moved or
              deleted, or you might have typed the wrong URL.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
