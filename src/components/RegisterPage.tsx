// src/components/Register.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Determine the backend URL based on environment (development or production)
  const BACKEND_URL =  

    process.env.NODE_ENV === 'production'
      ? 'https://enterprisebackend.onrender.com'
      
      : 'http://localhost:5000';


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
      setMessage(`Registration successful! ${response.data.message}`);
    } catch (error) {
      setMessage('Error during registration');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
