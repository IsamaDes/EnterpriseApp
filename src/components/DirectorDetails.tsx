import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DirectorDetails: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    rank: '',
    address: '',
    email: '',
    phoneNumber: '',
    nationalIdCard: '',
    issueDate: '',
    expiryDate: '',
    internationalPassport: null as File | null,
    anotherId: null as File | null,
    utilityBills: null as File | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = (formData as any)[key];
      if (value !== null) {
        submissionData.append(key, value);
      }
    });

    try {
      await axios.post('/api/account/details/director', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Director details submitted successfully');
    } catch (error: any) {
      toast.error('Error submitting director details');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Director Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rank" className="block text-sm font-medium text-gray-700">Rank</label>
            <input
              type="text"
              id="rank"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nationalIdCard" className="block text-sm font-medium text-gray-700">National ID Card</label>
            <input
              type="text"
              id="nationalIdCard"
              name="nationalIdCard"
              value={formData.nationalIdCard}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">Issue Date</label>
            <input
              type="date"
              id="issueDate"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Submit KYC Docs for the Company</h3>
            <div className="mb-4">
              <label htmlFor="internationalPassport" className="block text-sm font-medium text-gray-700">Copy of International Passport</label>
              <input
                type="file"
                id="internationalPassport"
                name="internationalPassport"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="anotherId" className="block text-sm font-medium text-gray-700">Copy of Another ID</label>
              <input
                type="file"
                id="anotherId"
                name="anotherId"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="utilityBills" className="block text-sm font-medium text-gray-700">Utility Bills</label>
              <input
                type="file"
                id="utilityBills"
                name="utilityBills"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>
          </div>

          <div className="mb-4 text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Director Details
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DirectorDetails;
