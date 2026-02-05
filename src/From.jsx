import React, { useState } from 'react';

export default function From() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: 'Select',
  });  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={submitForm} className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded-lg shadow-lg">
        
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-400">Name</span>
          </label>
          <input 
            onChange={handleChange}
            value={formData.name}
            type="text" 
            name="name"
            placeholder="" 
            className="input input-bordered w-full bg-gray-700 border-none text-white focus:outline-none focus:ring-2 focus:ring-purple-600" 
          />
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-400">Email</span>
          </label>
          <input 
            onChange={handleChange}
            value={formData.email}
            type="email" 
            name="email"
            placeholder="" 
            className="input input-bordered w-full bg-gray-700 border-none text-white focus:outline-none focus:ring-2 focus:ring-purple-600" 
          />
        </div>

        {/* Password Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-400">Password</span>
          </label>
          <input 
            onChange={handleChange}
            value={formData.password}
            type="password" 
            name="password"
            placeholder="" 
            className="input input-bordered w-full bg-gray-700 border-none text-white focus:outline-none focus:ring-2 focus:ring-purple-600" 
          />
        </div>

        {/* Gender Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-400">Gender</span>
          </label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange}
            className="select select-bordered w-full bg-gray-700 border-none text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option disabled value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-none text-white">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}
