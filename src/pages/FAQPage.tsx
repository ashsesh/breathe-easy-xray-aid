
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
              <p className="text-gray-600">Find answers to common questions about PneumoScan and pneumonia detection</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    How accurate is PneumoScan in detecting pneumonia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    PneumoScan has demonstrated an accuracy of approximately 87% in controlled testing environments. 
                    The sensitivity (ability to correctly identify pneumonia cases) is around 90%, and specificity 
                    (ability to correctly identify normal cases) is around 85%. However, performance may vary in 
                    real-world settings, and the tool should be used as an educational aid or preliminary screening 
                    tool, not as a definitive diagnostic method.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    What types of pneumonia can PneumoScan detect?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    PneumoScan is designed to detect radiographic patterns consistent with pneumonia in general. 
                    It does not differentiate between bacterial, viral, or fungal pneumonia. The system classifies 
                    X-rays into "Normal" or "Pneumonia" categories. A healthcare professional would need to consider 
                    clinical symptoms, patient history, and possibly additional tests to determine the specific type 
                    of pneumonia.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    Is my X-ray data kept private and secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Yes, we take your privacy and data security seriously. X-ray images are processed in-browser 
                    using client-side technology whenever possible, and we do not permanently store your X-ray images 
                    on our servers unless you explicitly opt-in. All data transmission is encrypted using standard 
                    protocols. Please refer to our Privacy Policy for more detailed information about how we handle 
                    your data.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    Can PneumoScan replace a radiologist's diagnosis?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    No, PneumoScan is not intended to replace professional medical diagnosis. It is designed as an 
                    educational tool and supportive aid. The results should be reviewed by a qualified healthcare 
                    professional, such as a radiologist or physician, who can consider the full clinical context. AI 
                    tools like PneumoScan are most effective when used to complement, not replace, human expertise.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    What image formats are supported?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    PneumoScan currently supports JPG and PNG image formats. We recommend using high-quality, uncompressed 
                    images when possible. The maximum file size is 10MB. Please ensure that the entire lung field is 
                    visible in the X-ray and that the image is properly oriented.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    How should I interpret the confidence score?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    The confidence score indicates how certain the AI model is about its classification. A higher 
                    score (closer to 100%) suggests greater confidence in the result. However, even high-confidence 
                    predictions should be confirmed by a healthcare professional. Sometimes, the model may be very 
                    confident but incorrect, or less confident but correct. The score should be interpreted as one 
                    piece of information among many when considering the likelihood of pneumonia.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    What should I do if PneumoScan detects pneumonia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    If PneumoScan indicates that pneumonia may be present, you should consult with a healthcare 
                    professional promptly. Bring the X-ray and the PneumoScan result with you to your appointment. 
                    Remember that PneumoScan provides a preliminary assessment only, and proper diagnosis requires 
                    clinical evaluation by a medical professional who can consider your symptoms, medical history, 
                    physical examination findings, and possibly additional tests.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    Can PneumoScan detect other lung conditions?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    No, PneumoScan is specifically trained to detect patterns consistent with pneumonia. It is not 
                    designed to detect or differentiate other lung conditions such as lung cancer, tuberculosis, 
                    chronic obstructive pulmonary disease (COPD), or pulmonary edema. If you suspect another lung 
                    condition, please consult with a healthcare professional.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9" className="border-b">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    How was the AI model trained?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    The AI model was trained using a deep learning approach on a large dataset of labeled chest X-ray 
                    images. The training data included thousands of X-rays that were classified by radiologists as either 
                    showing pneumonia or being normal. The model learns patterns and features associated with pneumonia 
                    through this training process. We regularly update and refine the model with new data to improve its 
                    performance over time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-10">
                  <AccordionTrigger className="hover:text-medical-600 hover:no-underline py-4 font-medium">
                    Is PneumoScan available for commercial or clinical use?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    The current version of PneumoScan is intended for educational and research purposes only. For clinical 
                    or commercial use, please contact us to discuss licensing options and the additional validation and 
                    regulatory requirements that would be necessary. We're interested in collaborating with healthcare 
                    institutions to develop and validate clinical versions of our technology.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Additional Questions */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center space-y-4">
              <h2 className="text-xl font-semibold">Still Have Questions?</h2>
              <p className="text-gray-600">
                If you couldn't find the answer to your question, feel free to contact us directly.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            {/* CTA */}
            <div className="bg-medical-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Try PneumoScan?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Upload a chest X-ray image and receive an instant analysis using our AI technology.
              </p>
              <Button asChild size="lg" variant="default" className="bg-white text-medical-600 hover:bg-gray-100">
                <Link to="/upload">Upload X-Ray Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
