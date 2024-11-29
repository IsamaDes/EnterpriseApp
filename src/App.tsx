import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import VerifyOtp from './components/VerificationPage';
import LoginPage from './components/LoginPage';
import UpdateInformationPage from './components/UpdateInformationPage';
import DirectorDetails from './components/DirectorDetails';
import AdminDetails from './components/adminDetails/AdminDetails';
import CompanyDashboardPage from './pages/companyPages/CompanyDashBoardPage';
import BusinessDashboard from './components/businessDashboard/BusinessDashboard';
import CompanyKycPage from './pages/companyPages/ComapanyKycPages';
import "./App.css"
import AccountTypeSelection from './components/AccountTypeselection';
import ConfirmDetails from './components/ConfirmDetails';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-user" element={<VerifyOtp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/update-information" element={<UpdateInformationPage />} />

          <Route path="/director-details" element={<DirectorDetails/>} />
          <Route path="/admin-details" element={<AdminDetails/>} />
          <Route path="/company-dashboard" element={<CompanyDashboardPage />} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/kyc" element={<CompanyKycPage />} />
          {/* <Route path="/company-settings" element={<Settings />} /> */}
          <Route path="/account-selection" element={<AccountTypeSelection/>} />
          <Route path="/confirm-details" element={<ConfirmDetails/>} />



        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
