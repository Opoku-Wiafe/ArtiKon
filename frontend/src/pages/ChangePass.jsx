import React, { useState } from 'react';
import './misc.css'; //CSS for font and others
import { Link } from 'react-router-dom';

export default function ChangePass() {
  const [oldpassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldpassword') {
      setOldPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      // Clear error message if confirm password is cleared
      if (value === '') {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if new password is the same as old password
    if (oldpassword === newPassword) {
      setErrorMessage('New password cannot be the same as the old password.');
      return;
    }
    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }
    // If all checks pass, proceed with changing password
    // (Assuming you have a function called changePassword)
    changePassword(newPassword);
    // Clear form fields
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 roboto-font">
      <div className="max-w-md w-full space-y-8 p-5 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Change Password</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter your old and new password below.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="oldpassword" className="block text-sm font-medium text-gray-700">Old Password</label>
            <input type="password" name="oldpassword" id="oldpassword" placeholder="Enter the password you wish to change" value={oldpassword} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md input-field focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <input type="password" name="newPassword" id="newPassword" placeholder="Enter a new password" value={newPassword} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md input-field focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Repeat Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Repeat your new password" value={confirmPassword} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md input-field focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" />
          </div>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};