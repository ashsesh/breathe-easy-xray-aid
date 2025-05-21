
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h1 className="text-3xl font-bold">About PneumoScan</h1>
              <p className="text-gray-600">Learn about our mission, how our technology works, and the team behind the project</p>
            </div>
            
            {/* Our Mission */}
            <section className="space-y-6">
              <div className="bg-gradient-to-r from-medical-600 to-medical-700 text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg">
                  PneumoScan aims to improve pneumonia detection through accessible AI technology. 
                  We believe that leveraging artificial intelligence can help democratize medical 
                  diagnostics, especially in areas with limited access to radiologists.
                </p>
              </div>
            </section>
            
            {/* Technology */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Our Technology</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">How Our AI Model Works</h3>
                  <p className="text-gray-600">
                    PneumoScan utilizes a deep learning convolutional neural network (CNN) model that has been trained on thousands 
                    of labeled chest X-ray images. The model has learned to recognize patterns and features associated with pneumonia.
                  </p>
                  <p className="text-gray-600">
                    When you upload a chest X-ray, our system preprocesses the image and feeds it into the AI model. 
                    The model analyzes the image and classifies it as either "Normal" or "Pneumonia," along with a 
                    confidence score indicating the model's certainty in its prediction.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Training Data & Performance</h3>
                  <p className="text-gray-600">
                    Our model was trained on a diverse dataset of chest X-rays from multiple sources, including hospitals 
                    and public medical imaging databases. The training data includes both adult and pediatric X-rays with 
                    various types of pneumonia.
                  </p>
                  <p className="text-gray-600">
                    In validation testing, our model achieved:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Sensitivity: ~90% (ability to correctly identify pneumonia cases)</li>
                    <li>Specificity: ~85% (ability to correctly identify normal cases)</li>
                    <li>Overall accuracy: ~87%</li>
                  </ul>
                  <p className="text-gray-600 italic text-sm">
                    Note: These figures represent performance in controlled testing environments. Real-world performance may vary.
                  </p>
                </div>
              </div>
            </section>
            
            {/* The Team */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Our Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Sarah Johnson" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 mb-2">Medical Director</p>
                  <p className="text-sm text-gray-600">
                    Pulmonologist with over 15 years of clinical experience, overseeing the medical validity of our platform.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Michael Chen" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold">Dr. Michael Chen</h3>
                  <p className="text-sm text-gray-500 mb-2">AI Research Lead</p>
                  <p className="text-sm text-gray-600">
                    Ph.D. in Computer Science with specialization in medical image analysis and deep learning.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alex Rodriguez" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold">Alex Rodriguez</h3>
                  <p className="text-sm text-gray-500 mb-2">Software Engineer</p>
                  <p className="text-sm text-gray-600">
                    Specializes in web application development and making complex technologies accessible to users.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Our team includes medical professionals, AI researchers, and software engineers dedicated to 
                  improving pneumonia detection through technology.
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </section>
            
            {/* Research & Publications */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Research & Publications</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Deep Learning for Automated Detection of Pneumonia in Chest Radiographs</h3>
                    <p className="text-sm text-gray-500">Journal of Medical Imaging, 2023</p>
                    <p className="text-gray-600 mt-2">
                      In this paper, we present our deep learning approach to pneumonia detection and evaluate its performance 
                      against radiologists' interpretations.
                    </p>
                  </div>
                  
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Improving Healthcare Access through AI: A Case Study in Pneumonia Detection</h3>
                    <p className="text-sm text-gray-500">AI in Healthcare Conference, 2022</p>
                    <p className="text-gray-600 mt-2">
                      This presentation discussed how AI tools like PneumoScan can improve healthcare access in underserved areas.
                    </p>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">Dataset Diversity and Model Robustness in Medical Imaging AI</h3>
                    <p className="text-sm text-gray-500">Frontiers in Artificial Intelligence, 2022</p>
                    <p className="text-gray-600 mt-2">
                      Our research on ensuring AI models work effectively across diverse patient populations and imaging equipment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Disclaimer */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Important Disclaimer</h2>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Medical Disclaimer</h3>
                <div className="space-y-4 text-amber-700">
                  <p>
                    PneumoScan is designed for educational and screening purposes only. It is not intended to be a substitute 
                    for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    The AI tool analyzes chest X-ray images to detect potential signs of pneumonia, but it has limitations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>It may not detect all cases of pneumonia</li>
                    <li>It cannot differentiate between different types of pneumonia</li>
                    <li>It may sometimes provide false positives or false negatives</li>
                    <li>X-rays alone are not always sufficient for definitive pneumonia diagnosis</li>
                  </ul>
                  <p className="font-medium">
                    Always seek the advice of your physician or other qualified health provider with any questions you may 
                    have regarding a medical condition. Never disregard professional medical advice or delay in seeking it 
                    because of information provided by this tool.
                  </p>
                </div>
              </div>
            </section>
            
            {/* CTA */}
            <section className="bg-medical-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Try PneumoScan?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Upload a chest X-ray image and receive an instant analysis using our AI technology.
              </p>
              <Button asChild size="lg" variant="default" className="bg-white text-medical-600 hover:bg-gray-100">
                <Link to="/upload">Upload X-Ray Now</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
