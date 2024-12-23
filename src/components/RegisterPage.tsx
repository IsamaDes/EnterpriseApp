import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface RegisterResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
  };
}

const Register: React.FC = () => {
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const BACKEND_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://enterprisebackend.onrender.com'
      : 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userData);

    try {
      const response = await axios.post<RegisterResponse>(
        `${BACKEND_URL}/api/auth/register`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      localStorage.setItem('userId', response.data.user.id);
      const userId = localStorage.getItem('userId');
      console.log(`User ID: ${userId}`);
      localStorage.setItem('userName', response.data.user.name);
      const userName = localStorage.getItem('userName');
      console.log(`User Name: ${userName}`);
      localStorage.setItem('token', response.data.token);

      navigate('/verify-user');
      setMessage(`Registration successful! ${response.data.message}`);
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || 'Error during registration'
      );
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-center text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
