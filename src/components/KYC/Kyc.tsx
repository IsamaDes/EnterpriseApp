import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Modal Component
const Modal = ({ message, onClose }: { message: string; onClose: () => void }) => {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md shadow-lg max-w-sm">
          <h2 className="text-xl font-semibold text-green-600">Success</h2>
          <p className="text-lg">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  };




const Kyc = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBusinessIncorporation, setDateOfBusinessIncorporation] = useState('');
  const [utilityBills, setUtilityBills] = useState<File | null>(null);
  const [certificateOfIncorporation, setCertificateOfIncorporation] = useState<File | null>(null);
  const [memat, setMemat] = useState<File | null>(null);
  const [operationLicense, setOperationLicense] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phoneNumber', phoneNumber);
    formData.append('dateOfBusinessIncorporation', dateOfBusinessIncorporation);

    if (utilityBills) formData.append('utilityBills', utilityBills);
    if (certificateOfIncorporation) formData.append('certificateOfIncorporation', certificateOfIncorporation);
    if (memat) formData.append('memat', memat);
    if (operationLicense) formData.append('operationLicense', operationLicense);

    try {
      const response = await axios.post('http://localhost:5000/api/submitkyc', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
 setModalMessage('KYC documents submitted successfully!');
 setIsModalOpen(true);
        } catch (error) {
      console.error('Error uploading files:', error);

    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <div className='flex bg-lightblue-200 flex-col'>
        <span className='text-[40px] text-center'> Submit Your KYC Documents </span> 
        <span className='text-[25px] text-center'> Please upload the necessary documents to complete your account verification. </span>
          {isModalOpen && <Modal message={modalMessage} onClose={handleModalClose} />}

    <form className='flex flex-col p-10' onSubmit={handleSubmit}>
      <label htmlFor="name" className="mb-2 text-sm text-left font-semibold text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />
      <label htmlFor="address" className="mb-2 text-sm  text-left font-semibold text-gray-700">Address</label>
      <input
        type="text"
        id="address"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />
      <label htmlFor="phoneNumber" className="mb-2 text-sm  text-left font-semibold text-gray-700">Phone Number</label>
      <input
        type="text"
        id="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />
      <label htmlFor="dateOfBusinessIncorporation" className="mb-2 text-sm  text-left font-semibold text-gray-700">Date of Business Incorporation</label>
      <input
        type="date"
        id="dateOfBusinessIncorporation"
        value={dateOfBusinessIncorporation}
        onChange={(e) => setDateOfBusinessIncorporation(e.target.value)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />

      <label htmlFor="utilityBills" className="mb-2 mt-8 text-sm font-semibold text-left  text-gray-700">Utility Bills</label>
      <input
        type="file"
        id="utilityBills"
        onChange={(e) => handleFileChange(e, setUtilityBills)}
        required
        className="border rounded-md p-2 mb-4  w-1/2"
      />

      <label htmlFor="certificateOfIncorporation" className="mb-2 text-sm text-left font-semibold text-gray-700">Certificate of Incorporation</label>
      <input
        type="file"
        id="certificateOfIncorporation"
        onChange={(e) => handleFileChange(e, setCertificateOfIncorporation)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />

      <label htmlFor="memat" className="mb-2 text-sm font-semibold text-left text-gray-700">Memorandum and Articles of Association</label>
      <input
        type="file"
        id="memat"
        onChange={(e) => handleFileChange(e, setMemat)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />
      <label htmlFor="operationLicense" className="mb-2 text-sm font-semibold text-left text-gray-700">Operational License</label>
      <input
        type="file"
        id="operationLicense"
        onChange={(e) => handleFileChange(e, setOperationLicense)}
        required
        className="border rounded-md p-2 mb-4 w-1/2"
      />
      <button
        type="submit"
        className="bg-blue-500 w-[100px] mt-8 text-white py-2 px-4 rounded-md"
      >
        Submit 
      </button>
    </form>
    </div>
  );
};

export default Kyc;
