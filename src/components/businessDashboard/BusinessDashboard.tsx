import React from 'react';
import { Link } from 'react-router-dom';

const BusinessDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-8 shadow-md">
        <h3 className="text-lg font-bold mb-4">Welcome, Admin</h3>
        <ul>
          <li><Link to="/kyc" className="btn btn-outline-secondary w-full mb-2">KYC</Link></li>
          <li><Link to="/tools" className="btn btn-outline-secondary w-full mb-2">Tools</Link></li>
          <li><Link to="/academy" className="btn btn-outline-secondary w-full mb-2">Academy</Link></li>
          <li><Link to="/agents" className="btn btn-outline-secondary w-full mb-2">Agents</Link></li>
          <li><Link to="/vendors" className="btn btn-outline-secondary w-full mb-2">Vendors</Link></li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-6">Business Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">Agent UTM Link</h3>
            <p>Details about agent UTM links.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">Vendor UTM Link</h3>
            <p>Details about vendor UTM links.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">Partner UTM Link</h3>
            <p>Details about partner UTM links.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">Departments</h3>
            <p>Details about staff management and sub-admins.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">Analytics</h3>
            <p>Data visualization and analytics tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
