import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", tel: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.tel.trim()) {
      newErrors.tel = "Phone number is required";
      valid = false;
    } else if (!/^[0-9]{10,15}$/.test(formData.tel)) {
      newErrors.tel = "Please enter a valid phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3001/contact', formData, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("Response:", response.data);
      setSuccessMessage("Your message has been successfully sent!");
      setFormData({ name: "", email: "", tel: "" });

      setTimeout(() => {
        setSuccessMessage("");
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        {/* Success Message */}
        {successMessage && (
          <div className={`absolute top-4 right-4 bg-${successMessage.includes("successfully") ? 'green' : 'red'}-500 text-white px-6 py-3 rounded-lg shadow-lg max-w-xs transition-all duration-300 transform ${successMessage ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Info */}
          <div className="p-8 bg-gradient-to-br from-orange-700 to-orange-500 text-white">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get in touch
            </h1>
            <p className="mt-4 text-lg">
              Fill in the form to start a conversation. We'll get back to you as soon as possible.
            </p>
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="mt-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9260932458
              </p>
              <p className="mt-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              er.ayush336@gamil.com
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 bg-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  className={`mt-1 block w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  className={`mt-1 block w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  value={formData.tel}
                  onChange={handleChange}
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder=""
                  className={`mt-1 block w-full px-4 py-3 rounded-lg border ${errors.tel ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                />
                {errors.tel && <p className="mt-1 text-sm text-red-600">{errors.tel}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-white font-medium bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}