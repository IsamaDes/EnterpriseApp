import React, { useEffect, useState } from "react";



const CompanyDashboard: React.FC = () => {
    const [userName, setUserName] = useState<string | null>("");
    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
          setUserName(storedUserName);
        }  
        console.log(`User Name: ${storedUserName}`);
      }, []);

  return (
    <div className="flex min-h-screen bg-gray-200">
    <div className=" flex flex-col p-5 w-full bg-blue-40">
      <div className="flex gap-5 justify-between ">
        <div className="flex flex-col w-full">
          <h1 className="text-left text-2xl font-semibold  text-gray-700 mb-4">
          Welcome, {userName || "Guest"}
        </h1>
          <div className="flex w-full justify-between">
            <span>Your Dashboard</span>
            <div className="bg-white b-2">Date Component</div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="grid grid-cols-2 gap-4 mr-4 w-1/2 ">
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <span>Number Of Registered Businesses</span>
            <span className="text-[36px]">275</span>
          </div>

          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <span>Active Agents</span>
            <span className="text-[36px]">182</span>
          </div>

          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <span>Pending QC tasks</span>
            <span className="text-[36px]">2300</span>
          </div>

          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <span>Closed Tickets</span>
            <span className="text-[36px]">42</span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-white">
            <h2 className="text-2xl font-semibold">Registered Businesses</h2>
            <button
              className="flex justify-center text-[13px] items-center text-red-900 py-2 px-4 rounded-md hover:bg-red-600"
            >
              See All
            </button>
          </div>
          <div> 
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-start space-x-4">     
        <button
          className="flex items-center justify-center bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          Search Business
        </button>
        <button
          className="flex items-center justify-center bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          Create Ticket
        </button>
      </div>
      <div className="overflow-x-auto mt-8 bg-white">
          <thead>
            <tr className="border-b-2">
              <th className="py-3 px-4 text-transparent text-left">Image</th>
              <th className="py-3 px-4 text-left">
                Name
              </th>
              <th className="py-3 px-4 text-left">
                agent ID
              </th>
              <th className="py-3 px-4 text-left">   
              </th>    
              <th className="py-3 px-4 text-left">
                <button
                  className="py-2 px-4 flex items-center  text-red-500 rounded-md"
                >
                </button>
              </th>
            </tr>
          </thead>
        <div className="flex justify-center mt-4"></div>
      </div>
    </div>
    </div>
  );
};

export default CompanyDashboard;
