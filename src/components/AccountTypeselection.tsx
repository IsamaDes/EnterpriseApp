import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface CreateAccountResponse { message: string; }

const AccountTypeSelection: React.FC = () => {
  const [selectedAccountType, setSelectedAccountType] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const navigate = useNavigate();


  const handleAccountSelect = (accountType: string) => {
    setSelectedAccountType(accountType);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleContinue = async () => {
    if (!selectedAccountType || !selectedCountry) {
      alert('Please select both account type and country.');
      return;
    }

    try {
      const response = await axios.post<CreateAccountResponse>('http://localhost:5000/api/accounts/create', {
        accountType: selectedAccountType,
        country: selectedCountry,
      });

      alert(response.data.message);
      navigate("/confirm-details" )
    } catch (error) {
      alert('Error creating account type. Please try again.');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto min-h-screen bg-green-100 shadow-lg rounded-md">
      <h1 className="text-[18px] font-700 text-center mb-4 font-roboto text-gray-800">
        What type of account would you like to create?
      </h1>
      <p className="text-gray-600 mb-10 text-[14px] font-400 font-poppins text-center">
        Select the account type that best meets your needs.
      </p>

      <div className="mb-6">
        <label htmlFor="country" className="block font-medium text-gray-700">
          Country
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select country
          </option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="ng">Nigeria</option>
        </select>
        <p className="mt-2 text-sm text-blue-500 cursor-pointer hover:underline">
          For other countries click here.
        </p>
      </div>

      <div className="mb-8">
        <label className="block font-medium text-gray-700">
          Select an account type
        </label>
        <div className="mt-4 space-y-4">
          <div
            className={`p-4 border rounded-md hover:shadow-md cursor-pointer ${
              selectedAccountType === 'business' ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => handleAccountSelect('business')}
          >
            <h3 className="text-[18px] font-600 font-poppins text-gray-800">
              Business account
            </h3>
            <p className="text-sm text-gray-600">
              For freelancers, sole traders, startups, small to medium businesses and enterprises.
            </p>
          </div>

          <div
            className={`p-4 border rounded-md hover:shadow-md cursor-pointer ${
              selectedAccountType === 'other' ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => handleAccountSelect('other')}
          >
            <h3 className="text-[18px] font-600 font-poppins text-gray-800">
              Other entities
            </h3>
            <p className="text-sm text-gray-600">
              For charities, non-profits & religious institutions.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={handleContinue}
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Continue
        </button>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AccountTypeSelection;
