import React, { useState } from 'react';
import './misc.css'; //CSS for font and otherstuff

export default function ChooseNewPass() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // password logic here
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);

    // Reset the password field after use
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div className="flex items-center justify-center h-screen roboto-font">
      <div className="border border-gray-300 rounded p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>
        <p className="text-gray-600 text-center mb-6">Lets help you reset your password</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">New Password:</label>
            <input
              className="border rounded px-3 py-2 w-full"
              type="password"
              placeholder="Enter a new password"
              value={newPassword}
              onChange={handleChangeNewPassword}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password:</label>
            <input
              className="border rounded px-3 py-2 w-full"
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset Password
            </button>
            <a
              href="/log-in"
              className="text-blue-500 hover:text-red-500 font-medium"
              title="Go back to the Login page"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};