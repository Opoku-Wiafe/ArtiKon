import React, { useState } from 'react'
import { validateEmail } from './validators';
import { Link } from 'react-router-dom';
import './misc.css'; //CSS for font and others

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const newErrors = validateEmail(newEmail);
    setErrors(newErrors);
  }

  const resetPassword = async () => {
    if (!errors.email && email) {
      console.log(`Reset password for: ${email}`);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen roboto-font">
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-5 text-center">Request Password Change</h1>
        <input 
          type="email" 
          placeholder="Enter your email to reset password" 
          value={email} 
          onChange={handleEmailChange}
          className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        <div className="text-right">
          <button 
            onClick={resetPassword} 
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
        </div>
        <p className="mt-5 text-center text-sm text-gray-600">Remembered your password?
          <Link to="/log-in" className="font-medium text-indigo-600 hover:text-indigo-500"> Back to Login</Link>
        </p>
      </div>
    </div>
  );
};