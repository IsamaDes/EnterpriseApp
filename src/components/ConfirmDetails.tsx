import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


interface CreateAccountResponse {
  message: string;
}

export const ConfirmDetails: React.FC = () => {
  const [isBusinessIncorporated, setIsBusinessIncorporated] = useState<"yes" | "no" | null>(null);
  const [registrationType, setRegistrationType] = useState<string | null>(null);
  const [msaAgreement, setMsaAgreement] = useState<boolean>(false);
  const [promotionalAgreement, setPromotionalAgreement] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("John");
  const [lastName, setLastName] = useState<string>("Doe");
  const [email, setEmail] = useState<string>("name@email.com");

  // Additional Fields
  const [dateOfIncorporation, setDateOfIncorporation] = useState<string>("");
  const [certificateOfIncorporation, setCertificateOfIncorporation] = useState<File | null>(null);
  const [utilityBills, setUtilityBills] = useState<File | null>(null);
  const [memorandum, setMemorandum] = useState<File | null>(null);
  const [operationalLicense, setOperationalLicense] = useState<File | null>(null);


  const navigate = useNavigate();



  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("isBusinessIncorporated", isBusinessIncorporated!);
      formData.append("registrationType", registrationType!);
      formData.append("password", password);
      formData.append("dateOfIncorporation", dateOfIncorporation);
      if (certificateOfIncorporation) formData.append("certificateOfIncorporation", certificateOfIncorporation);
      if (utilityBills) formData.append("utilityBills", utilityBills);
      if (memorandum) formData.append("memorandum", memorandum);
      if (operationalLicense) formData.append("operationalLicense", operationalLicense);
      formData.append("msaAgreement", String(msaAgreement));
      formData.append("promotionalAgreement", String(promotionalAgreement));

      const response = await axios.post<CreateAccountResponse>('http://localhost:5000/api/user/create', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(response.data.message);
      navigate("/company-dashboard" )

    } catch (error) {
      alert("Error creating user. Please try again.");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-md">
      <h1 className="text-[18px] font-bold text-gray-800 text-center mb-6">Confirm your details</h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Full name</label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 border rounded-md bg-gray-50 text-gray-600 shadow-sm"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-3 border rounded-md bg-gray-50 text-gray-600 shadow-sm"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md bg-gray-50 text-gray-600 shadow-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-md bg-gray-50 text-gray-600 shadow-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Is your business incorporated?</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              value="yes"
              checked={isBusinessIncorporated === "yes"}
              onChange={() => setIsBusinessIncorporated("yes")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={isBusinessIncorporated === "no"}
              onChange={() => setIsBusinessIncorporated("no")}
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Registration Type</label>
        <select
          value={registrationType || ""}
          onChange={(e) => setRegistrationType(e.target.value)}
          className="w-full p-3 border rounded-md bg-gray-50 text-gray-600 shadow-sm"
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="LLC">LLC</option>
          <option value="Sole Proprietor">Sole Proprietor</option>
          <option value="Corporation">Corporation</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Agreements</label>
        <div>
          <label className="block">
            <input
              type="checkbox"
              checked={msaAgreement}
              onChange={(e) => setMsaAgreement(e.target.checked)}
            />
            Master Service Agreement
          </label>
          <label className="block">
            <input
              type="checkbox"
              checked={promotionalAgreement}
              onChange={(e) => setPromotionalAgreement(e.target.checked)}
            />
            Promotional Agreement
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Date of Incorporation</label>
        <input
          type="date"
          value={dateOfIncorporation}
          onChange={(e) => setDateOfIncorporation(e.target.value)}
          className="w-full p-3 border rounded-md bg-gray-50 text-gray-600 shadow-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Certificate of Incorporation</label>
        <input
          type="file"
          onChange={(e) => setCertificateOfIncorporation(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Utility Bills</label>
        <input
          type="file"
          onChange={(e) => setUtilityBills(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Memorandum and Articles of Association</label>
        <input
          type="file"
          onChange={(e) => setMemorandum(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Operational License</label>
        <input
          type="file"
          onChange={(e) => setOperationalLicense(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>

      <button
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ConfirmDetails;
