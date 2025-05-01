import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const serviceImages = {
  webDesign: 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1974&auto=format&fit=crop',
  frontend: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
  backend: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  fullStack: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
};

const premiumFeatures = {
  webDesign: ['Responsive Design', 'UI/UX Optimization', 'Brand Identity', 'SEO Friendly', '3 Revisions'],
  frontend: ['React/Vue/Angular', 'Performance Optimization', 'Accessibility', 'Cross-browser Support', 'API Integration'],
  backend: ['Node.js/Django', 'Database Design', 'API Development', 'Cloud Integration', 'Security'],
  fullStack: ['End-to-End Solution', 'DevOps Setup', 'Scalable Architecture', 'CI/CD Pipeline', 'Maintenance'],
};

const ServicesCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // address: '',
    age: '',
    websiteType: '',
    description: '',
    // serviceType: '',
    budget: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      title: 'Web Design',
      description: 'Modern and responsive web design services that captivate your audience.',
      image: serviceImages.webDesign,
      price: 'Starting from $999',
      icon: '🎨'
    },
    {
      title: 'Frontend Development',
      description: 'Interactive and optimized UI development for seamless user experiences.',
      image: serviceImages.frontend,
      price: 'Starting from $1,499',
      icon: '💻'
    },
    {
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions powering your digital presence.',
      image: serviceImages.backend,
      price: 'Starting from $1,999',
      icon: '⚙️'
    },
    {
      title: 'Full Stack Development',
      description: 'Complete web solutions from frontend to backend with ongoing support.',
      image: serviceImages.fullStack,
      price: 'Starting from $2,999',
      icon: '🚀'
    },
  ];

  const handleOpenForm = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsFormOpen(true);
    setFormData(prev => ({
      ...prev,
      serviceType: serviceTitle
    }));
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        // address: '',
        age: '',
        websiteType: '',
        description: '',
        // serviceType: '',
        budget: ''
      });
    }, 300);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, you would use:
      const response = await axios.post('http://localhost:3001/service', formData, {
        headers: { "Content-Type": "application/json" }
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          // address: '',
          age: '',
          websiteType: '',
          description: '',
          // serviceType: '',
          budget: ''
        });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
    tap: {
      scale: 0.98,
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { opacity: 0, x: -50 }
  };

  const getImageKey = (title) => {
    return title.toLowerCase()
      .replace(' development', '')
      .replace(' full stack', 'FullStack')
      .replace(' web design', 'WebDesign')
      .replace(' ', '');
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Tell us about yourself</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age*</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="18"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Project Details</h4>
            <div>
              <label htmlFor="websiteType" className="block text-sm font-medium text-gray-700 mb-1">Type of Website*</label>
              <select
                id="websiteType"
                name="websiteType"
                value={formData.websiteType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                <option value="">Select website type</option>
                <option value="Personal Portfolio">Personal Portfolio</option>
                <option value="Business Website">Business Website</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Blog">Blog</option>
                <option value="Educational">Educational</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Project Budget (USD)*</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                <option value="">Select budget range</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Project Description*</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Describe your project goals, target audience, and any specific requirements..."
                required
              ></textarea>
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Review Your Request</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">Service: <span className="text-blue-600">{selectedService}</span></h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p><span className="font-medium">Name:</span> {formData.name}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                </div>
                <div>
                  <p><span className="font-medium">Age:</span> {formData.age}</p>
                  <p><span className="font-medium">Website Type:</span> {formData.websiteType}</p>
                  <p><span className="font-medium">Budget:</span> {formData.budget}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-medium text-gray-800">Project Description:</p>
                <p className="text-sm text-gray-600 mt-1">{formData.description}</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
              >
                Submit Request
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Premium Web Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your digital presence with our bespoke development services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 cursor-pointer"
                onClick={() => handleOpenForm(service.title)}>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  <h3 className="text-xl font-bold text-orange-600">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-medium">{service.price}</span>
                  {/* <button
                    onClick={() => handleOpenForm(service.title)}
                    className="px-4 py-2 bg-opacity-20 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-30 transition-all border border-white border-opacity-30"
                  >
                    Click
                  </button> */}
                </div>
              </div>

              {/* Premium badge */}
              <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-yellow-400 to-yellow-600 text-xs font-bold text-white px-3 py-1 rounded-full shadow-lg">
                PREMIUM
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-orange-600 text-center mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Their web design transformed our online presence and increased our conversions by 40%.",
                author: "Sarah Johnson, CEO of TechNova"
              },
              {
                quote: "The backend architecture they built scaled perfectly with our rapid growth.",
                author: "Michael Chen, CTO of ScaleFast"
              },
              {
                quote: "Exceptional full-stack solutions with attention to every detail. Highly recommended!",
                author: "Emma Davis, Director of Digital at GlobalCorp"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-400 bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-orange-500 border-opacity-20"
              >
                <svg className="w-8 h-8 text-yellow-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-200 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-white font-medium">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Request Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
              onClick={handleCloseForm}
            >
              {/* This empty div captures clicks for closing */}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={formVariants}
              className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
            >
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)), url(${serviceImages[getImageKey(selectedService)]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl"></div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Request {selectedService}</h3>
                      <div className="flex items-center mt-2">
                        {[1, 2, 3].map((step) => (
                          <React.Fragment key={step}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium`}>
                              {step}
                            </div>
                            {step < 3 && (
                              <div className={`h-1 w-8 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={handleCloseForm}
                      className="text-gray-500 hover:text-gray-700 transition-colors p-1 -mt-1 -mr-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted!</h4>
                      <p className="text-gray-600 mb-6">
                        Thank you for your interest in our {selectedService} service. Our team will contact you within 24 hours to discuss your project.
                      </p>
                      <button
                        onClick={handleCloseForm}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentStep}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={stepVariants}
                        >
                          {renderFormStep()}
                        </motion.div>
                      </AnimatePresence>
                    </form>
                  )}

                  {/* Service features sidebar */}
                  {!isSubmitted && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h5 className="font-medium text-gray-800 mb-3">What's included in {selectedService}:</h5>
                      <ul className="space-y-2">
                        {premiumFeatures[getImageKey(selectedService)].map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesCard;