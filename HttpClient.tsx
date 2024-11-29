import axios from 'axios';


const getToken = () => {
    return localStorage.getItem("token")
}

export const HttpClient = axios.create({




  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": getToken() ? getToken() : "",
    "verify-affluence-hash": process.env.REACT_APP_TRANSACTION_HASH || "",
  },
});