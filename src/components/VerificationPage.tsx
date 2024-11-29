// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VerifyOtp: React.FC = () => {
//   const [otp, setOtp] = useState<string>("");
//   const [userId, setUserId] = useState<string>("");
//   const [userName, setUserName] = useState<string | null>("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the user data from localStorage
//     const storedUserName = localStorage.getItem('userName');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }

//     console.log(`User Name: ${storedUserName}`);

//     // Optionally, if the userId is also stored separately, you can fetch it
//     const storedUserId = localStorage.getItem("userId");
//     if (storedUserId) {
//       setUserId(storedUserId);
//     }
//   }, []);

//   const handleOtpSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/verifyotp", { otp, userId });

//       if (response.status === 200) {
//         alert("Verification successful!");
//         navigate("/login"); // Route to login on success
//       }
//     } catch (error) {
//       alert("Verification failed. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-xl font-bold mb-4">Welcome, {userName || "Guest"}</h1>

//       <p>Please verify your email to complete your registration process.</p>
//       <form
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         onSubmit={handleOtpSubmit}
//       >
//         <label className="block text-gray-700 text-sm font-bold mb-2">
//           Enter OTP
//         </label>

//         <input
//           type="text"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           required
//         />

//         <input type="text"
//           className="hidden"
//           value={userId}
//           readOnly
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Verify OTP
//         </button>
//       </form>
//     </div>
//   );
// };

// export default VerifyOtp;














import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string | null>("");

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the user data from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    console.log(`User Name: ${storedUserName}`);

    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/verifyotp", { otp, userId });

      if (response.status === 200) {
        alert("Verification successful!");
        navigate("/login");
      }
    } catch (error) {
      alert("Verification failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Welcome, {userName || "Guest"}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please verify your email to complete your registration process.
        </p>
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input type="text" className="hidden" value={userId} readOnly />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
