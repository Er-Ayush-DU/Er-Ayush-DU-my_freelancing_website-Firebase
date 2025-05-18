import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const AccountSettings = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('my-info');
  const [formData, setFormData] = useState({
    name: currentUser.displayName || 'Ayush Tiwari',
    email: currentUser.email || 'www@gmail.com',
    photo: currentUser.photoURL || 'https://randomuser.me/api/portraits/men/1.jpg',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    paymentMethod: 'paypal',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({ ...prev, photo: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Account Settings</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation - Mobile as tabs, Desktop as sidebar */}
          <div className="md:w-64 flex md:flex-col overflow-x-auto scrollbar-hide bg-white rounded-lg shadow-sm">
            <button
              className={`flex items-center gap-3 px-4 py-3 whitespace-nowrap md:w-full ${activeTab === 'my-info' ? 'bg-green-50 text-green-600 border-l-4 md:border-l-0 md:border-r-4 border-green-500' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('my-info')}
            >
              <i className="fas fa-user text-lg"></i>
              <span className="text-sm md:text-base">My Info</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3 whitespace-nowrap md:w-full ${activeTab === 'billing' ? 'bg-green-50 text-green-600 border-l-4 md:border-l-0 md:border-r-4 border-green-500' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('billing')}
            >
              <i className="fas fa-credit-card text-lg"></i>
              <span className="text-sm md:text-base">Billing</span>
            </button>
            <button
              className={`flex items-center gap-3 px-4 py-3 whitespace-nowrap md:w-full ${activeTab === 'password' ? 'bg-green-50 text-green-600 border-l-4 md:border-l-0 md:border-r-4 border-green-500' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('password')}
            >
              <i className="fas fa-lock text-lg"></i>
              <span className="text-sm md:text-base">Password</span>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            {activeTab === 'my-info' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">My Information</h2>

                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={formData.photo}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <i className="fas fa-camera text-green-500"></i>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      readOnly
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      readOnly
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </form>
            )}

            {activeTab === 'billing' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Billing & Payments</h2>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`border rounded-md p-4 cursor-pointer ${formData.paymentMethod === 'paypal' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3">
                        <i className="fab fa-paypal text-2xl text-blue-500"></i>
                        <span>PayPal</span>
                      </div>
                    </label>
                    <label className={`border rounded-md p-4 cursor-pointer ${formData.paymentMethod === 'card' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3">
                        <i className="far fa-credit-card text-2xl text-gray-600"></i>
                        <span>Credit/Debit Card</span>
                      </div>
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Security Code</label>
                          <input
                            type="text"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Update Payment Method
                </button>
              </form>
            )}

            {activeTab === 'password' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter new password"
                    />
                    <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Change Password
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;