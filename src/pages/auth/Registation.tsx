import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, MapPin, Eye, EyeOff } from 'lucide-react';
import loginPageSideImage from "../../../public/loginImage.jpg"
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
}

const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null); // Error state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset password error when the user changes input
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match'); // Set error message
      return;
    }

    console.log('Form Submitted:', formData);
    // Handle form submission logic (e.g., API call)
  };




  const handleGoogleSuccess = (response: any) => {
    console.log("Google Auth Success:", response);
    // Handle Google login authentication here (send token to backend, etc.)
  };

  const handleGoogleFailure = ():void => {
    console.error("Google Auth Failed:");
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} className="h-[100%] flex justify-evenly items-center gap-x-4 px-4 sm:px-6 lg:px-8">
      <div className='hidden md:block lg:w-[70%]  h-[100%] '>
          <img src={loginPageSideImage} className='h-[100%] w-[100%] '/>
      </div>
      <div className='w-[80%] lg:w-[30%]'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[100%] bg-white rounded-xl shadow-xl overflow-hidden my-8"
      >
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Create Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1 relative flex items-center">
                  <User className="absolute left-3  h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="John"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1 relative flex items-center">
                  <User className="absolute left-3  h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative flex items-center">
                <Phone className="absolute left-3  h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                 className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative flex items-center">
                <Mail className="absolute left-3  h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative flex items-center">
                <Lock className="absolute left-3  h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative flex items-center">
                <Lock className="absolute left-3  h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                 className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              Create Account
            </motion.button>
          </form>


                  {/* Google Auth */}
        <div className="mt-4 flex justify-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
        </div>

          <div className='mt-3 mb-2 text-center underline text-blue-500 hover:text-orange-500'>
          <Link to="/api/login">Already have an account?</Link>
          </div>
        </div>
      </motion.div>
    


      </div>
    </motion.div>
  );
};

export default Registration;
