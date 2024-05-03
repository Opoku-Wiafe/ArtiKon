import React, { useState } from 'react';
import { validateEmail, validatePassword, validateRequiredFields } from './validators';
import { Link } from 'react-router-dom';
import './misc.css'; //CSS for font and others

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    phone: '',
    userType: '',
    bio: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePhoto: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    // If it's a file input (profile photo), store the file directly
    const newValue = name === 'profilePhoto' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    // Validate required fields
    newErrors = validateRequiredFields([
      { value: formData.name, name: 'Name' },
      { value: formData.dob, name: 'Date of Birth' },
      { value: formData.gender, name: 'Gender' },
      { value: formData.phone, name: 'Phone' },
      { value: formData.userType, name: 'User Type' },
      { value: formData.email, name: 'Email' },
      { value: formData.password, name: 'Password' },
      { value: formData.confirmPassword, name: 'Confirm Password' },
      { value: formData.profilePhoto, name: 'Profile Photo' },
    ], newErrors);

    // Validate email
    newErrors = validateEmail(formData.email, newErrors);

    // Validate password
    newErrors = validatePassword(formData.password, formData.confirmPassword, newErrors);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Implement sign-up logic here
      // ...
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md text-gray-900 roboto-font">
      {/* Heading Label */}
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Name */}
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your Full Name Here..."
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          />
          {errors.name && (
            <div className="text-red-500 text-xs">{errors.name}</div>
          )}
        </label>

        {/* Date of Birth */}
        <label className="block mb-2">
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          />
          {errors.dob && (
            <div className="text-red-500 text-xs">{errors.dob}</div>
          )}
        </label>

        {/* Gender */}
        <label className="block mb-2">
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <div className="text-red-500 text-xs">{errors.gender}</div>
          )}
        </label>

        {/* Phone */}
        <label className="block mb-2">
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number Here..."
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          />
          {errors.phone && (
            <div className="text-red-500 text-xs">{errors.phone}</div>
          )}
        </label>

        {/* User Type */}
        <label className="block mb-2">
          User Type:
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          >
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="artisan">Artisan</option>
          </select>
          {errors.userType && (
            <div className="text-red-500 text-xs">{errors.userType}</div>
          )}
        </label>

        {/* Email */}
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your Email goes Here..."
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          />
          {errors.email && (
            <div className="text-red-500 text-xs">{errors.email}</div>
          )}
        </label>

        {/* Biography */}
        <label className="block mb-2">
          Bio:
          <textarea
            name="bio"
            placeholder="Tell Us About You and What You Do..."
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
          />
          {errors.bio && (
            <div className="text-red-500 text-xs">{errors.bio}</div>
          )}
        </label>

        {/* Password */}
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password Here..."
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          />
          {errors.password && (
            <div className="text-red-500 text-xs">{errors.password}</div>
          )}
        </label>

        {/* Confirm Password */}
        <label className="block mb-2">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            required
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-xs">{errors.confirmPassword}</div>
          )}
        </label>

        {/* Profile Picture */}
        <label className="block mb-2">
          Profile Picture:
          <input
            type="file"
            accept="image/*"
            name="profilePhoto"
            onChange={handleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 border rounded"
          />
          {errors.profilePhoto && (
            <div className="text-red-500 text-xs">{errors.profilePhoto}</div>
          )}
        </label>

        {/* Display Profile Photo */}
        {formData.profilePhoto && (
          <img
            src={URL.createObjectURL(formData.profilePhoto)}
            alt="Profile"
            className="block mx-auto w-32 h-32 rounded-full mt-4"
          />
        )}

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Sign Up
        </button>
      </form>

      {/* Back to Login */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/log-in" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};
