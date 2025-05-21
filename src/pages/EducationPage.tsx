
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const EducationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h1 className="text-3xl font-bold">Understanding Pneumonia</h1>
              <p className="text-gray-600">Learn about pneumonia, its causes, symptoms, and how chest X-rays help with diagnosis</p>
            </div>
            
            {/* What is Pneumonia */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What is Pneumonia?</h2>
                <p className="text-gray-600">
                  Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, 
                  causing cough with phlegm or pus, fever, chills, and difficulty breathing.
                </p>
                <p className="text-gray-600">
                  Various organisms, including bacteria, viruses, and fungi, can cause pneumonia. It can range in seriousness from 
                  mild to life-threatening and is most serious for infants, young children, people older than age 65, and people with 
                  underlying health problems or weakened immune systems.
                </p>
              </div>
              <div>
                <img 
                  src="https://img.freepik.com/free-vector/pneumonia-concept-illustration_114360-2229.jpg" 
                  alt="Pneumonia illustration" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </section>
            
            {/* Types of Pneumonia */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Types of Pneumonia</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Bacterial Pneumonia</h3>
                    <p className="text-gray-600">
                      Caused by various bacteria, with <em>Streptococcus pneumoniae</em> being the most common. 
                      It often follows a cold or the flu and can affect one part (lobe) of the lung, a condition 
                      called lobar pneumonia.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Viral Pneumonia</h3>
                    <p className="text-gray-600">
                      Caused by various viruses, including the flu, and is responsible for about one-third of 
                      pneumonia cases. Viral pneumonia is usually mild and improves in 1-3 weeks without treatment.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Fungal Pneumonia</h3>
                    <p className="text-gray-600">
                      Caused by fungi from soil or bird droppings and most common in people with chronic health problems or 
                      weakened immune systems. Certain fungi are found in specific geographic areas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            {/* Symptoms */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Symptoms of Pneumonia</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Common Symptoms</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Chest pain when breathing or coughing</li>
                    <li>Confusion or changes in mental awareness (in adults age 65 and older)</li>
                    <li>Cough, which may produce phlegm or pus</li>
                    <li>Fatigue</li>
                    <li>Fever, sweating and shaking chills</li>
                    <li>Lower than normal body temperature (in adults older than age 65 and people with weak immune systems)</li>
                    <li>Nausea, vomiting or diarrhea</li>
                    <li>Shortness of breath</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Symptoms By Age Group</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Newborns and Infants</h4>
                      <p className="text-gray-600">May show no signs of infection or may vomit, have fever and cough, or appear restless, tired and without energy.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Older Children</h4>
                      <p className="text-gray-600">May have a high fever, sometimes with a dry cough, associated chest and abdominal pain, or vomiting.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Adults Older than Age 65</h4>
                      <p className="text-gray-600">May have a lower than normal body temperature and confusion or changes in mental awareness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* X-Ray Diagnosis */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Chest X-Rays in Pneumonia Diagnosis</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Chest X-rays are a key tool in diagnosing pneumonia. When examining X-rays, doctors look for white spots in the lungs 
                    (called "infiltrates") that identify an infection. These spots represent inflammation and fluid build-up in the air sacs.
                  </p>
                  
                  <h3 className="text-xl font-semibold">X-Ray Characteristics of Pneumonia</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong>Consolidation:</strong> Appears as a dense, white area (opacity) in the lung field</li>
                    <li><strong>Air Bronchograms:</strong> Dark air-filled bronchi visible within the consolidation</li>
                    <li><strong>Distribution:</strong> Can be lobar (affecting entire lobe), bronchopneumonic (patchy), or interstitial (affecting tissue between air sacs)</li>
                    <li><strong>Effusions:</strong> Collection of fluid in the pleural space (between lung and chest wall)</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    While X-rays are valuable, they have limitations. Some early cases of pneumonia may not be visible on X-rays, 
                    and distinguishing between different causes of pneumonia can be challenging based on X-ray appearance alone.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <img 
                      src="https://prod-images-static.radiopaedia.org/images/53975106/98a83bb50e3ccc6bd1d7c7723a710b_big_gallery.jpg" 
                      alt="Normal chest X-ray" 
                      className="rounded-md border-2 border-green-500"
                    />
                    <p className="text-sm text-center font-medium">Normal Chest X-ray</p>
                  </div>
                  <div className="space-y-2">
                    <img 
                      src="https://prod-images-static.radiopaedia.org/images/5384758/b83373efcedf3a9309ef6aef27751d_big_gallery.jpg" 
                      alt="Pneumonia chest X-ray" 
                      className="rounded-md border-2 border-red-500"
                    />
                    <p className="text-sm text-center font-medium">Pneumonia Chest X-ray</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500 italic">
                      Note: These images are for educational purposes only. The appearance of pneumonia can vary 
                      significantly based on the type, severity, and other factors.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* AI in Pneumonia Detection */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">AI in Pneumonia Detection</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Artificial intelligence (AI) has emerged as a promising tool in the analysis of medical images, including chest 
                    X-rays for pneumonia detection. AI algorithms, particularly deep learning models, can be trained on thousands 
                    of labeled X-ray images to learn patterns associated with pneumonia.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Benefits of AI Detection</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Assists radiologists by providing a "second opinion"</li>
                    <li>Can help prioritize urgent cases in busy clinical settings</li>
                    <li>May improve detection rates, especially in subtle cases</li>
                    <li>Can be particularly valuable in resource-limited areas with fewer radiologists</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold">Limitations</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>AI should complement, not replace, clinical judgment</li>
                    <li>Performance depends on the quality and diversity of training data</li>
                    <li>May not account for all clinical context available to physicians</li>
                    <li>Requires validation in diverse clinical settings</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">How Our AI Tool Works</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li className="text-gray-600">
                      <strong>Image Preprocessing:</strong> The uploaded X-ray image is standardized for size, orientation, and contrast to ensure consistent analysis.
                    </li>
                    <li className="text-gray-600">
                      <strong>Feature Extraction:</strong> The AI model identifies relevant features in the lung fields that may indicate pneumonia.
                    </li>
                    <li className="text-gray-600">
                      <strong>Classification:</strong> The model classifies the image as either "Normal" or "Pneumonia" based on learned patterns.
                    </li>
                    <li className="text-gray-600">
                      <strong>Confidence Score:</strong> A probability score is calculated to indicate the model's confidence in its classification.
                    </li>
                  </ol>
                  <div className="mt-6 text-center">
                    <Button asChild>
                      <Link to="/upload">Try Our AI Detection Tool</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Prevention & Treatment */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Prevention & Treatment</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Prevention</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Get vaccinated (pneumococcal vaccine and annual flu vaccine)</li>
                    <li>Practice good hygiene (frequent handwashing)</li>
                    <li>Don't smoke or quit smoking</li>
                    <li>Maintain a strong immune system through healthy diet, regular exercise, and adequate sleep</li>
                    <li>Follow medical advice if you have underlying health conditions</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Treatment</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong>Antibiotics:</strong> For bacterial pneumonia (not effective against viral pneumonia)</li>
                    <li><strong>Antiviral medications:</strong> For certain types of viral pneumonia</li>
                    <li><strong>Fever reducers:</strong> Over-the-counter medicines to manage fever and pain</li>
                    <li><strong>Cough medicine:</strong> To help with persistent cough</li>
                    <li><strong>Rest and fluids:</strong> Essential for recovery</li>
                    <li><strong>Hospitalization:</strong> May be necessary for severe cases</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                <p className="text-amber-700 font-medium">
                  <strong>Important:</strong> Always consult a healthcare professional for proper diagnosis and treatment of pneumonia. 
                  This information is educational and not a substitute for medical advice.
                </p>
              </div>
            </section>
            
            {/* Resources */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Additional Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="https://www.cdc.gov/pneumonia/" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">CDC: Pneumonia</h3>
                  <p className="text-gray-600 mb-4">Centers for Disease Control and Prevention resources on pneumonia.</p>
                  <p className="text-medical-600 font-medium">Visit Resource →</p>
                </a>
                
                <a href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/pneumonia" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">American Lung Association</h3>
                  <p className="text-gray-600 mb-4">Information on pneumonia causes, symptoms, and treatment.</p>
                  <p className="text-medical-600 font-medium">Visit Resource →</p>
                </a>
                
                <a href="https://www.who.int/health-topics/pneumonia" target="_blank" rel="noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">WHO: Pneumonia</h3>
                  <p className="text-gray-600 mb-4">World Health Organization resources on pneumonia globally.</p>
                  <p className="text-medical-600 font-medium">Visit Resource →</p>
                </a>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="bg-medical-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Analyze Your X-Ray?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Our AI tool can help provide a preliminary assessment of chest X-rays for signs of pneumonia.
                Remember, this tool is meant for educational and screening purposes only.
              </p>
              <Button asChild size="lg" variant="default" className="bg-white text-medical-600 hover:bg-gray-100">
                <Link to="/upload">Upload X-Ray</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;
