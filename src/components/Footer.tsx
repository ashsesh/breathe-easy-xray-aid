
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">PneumoScan</h3>
          <p className="text-sm text-gray-500">
            An AI-powered tool for pneumonia detection from chest X-ray images.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm text-gray-500 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm text-gray-500 hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/upload" className="text-sm text-gray-500 hover:text-primary">
                Upload X-Ray
              </Link>
            </li>
            <li>
              <Link to="/education" className="text-sm text-gray-500 hover:text-primary">
                Education
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-primary">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-sm text-gray-500 hover:text-primary">
                Medical Disclaimer
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wider uppercase">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/support" className="text-sm text-gray-500 hover:text-primary">
                Support
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm text-gray-500 hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <p className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} PneumoScan. All rights reserved. This tool is not a substitute for
          professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
