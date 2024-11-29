import React, { useEffect, useState } from "react";


const CompanyDashboard: React.FC = () => {
    const [userName, setUserName] = useState<string | null>("");
    useEffect(() => {
        // Retrieve the user data from localStorage
        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
          setUserName(storedUserName);
        }  
        console.log(`User Name: ${storedUserName}`);
      }, []);

  return (
    <div className="flex min-h-screen bg-gray-200">
    <div className=" flex flex-col p-5 w-full bg-blue-40">
      {/* Stats Section */}
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

      {/* First Div (Grid) */}
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

          {/* Open Tickets */}
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <span>Pending QC tasks</span>
            <span className="text-[36px]">2300</span>
          </div>

          {/* Closed Tickets */}
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <span>Closed Tickets</span>
            <span className="text-[36px]">42</span>
          </div>
        </div>

        {/* Second Div (Businesses Section) */}
        <div className="w-1/2 flex flex-col">
          {/* Header Section */}
          <div className="flex items-center justify-between p-4 bg-white">
            <h2 className="text-2xl font-semibold">Registered Businesses</h2>

            <button
              // onClick={handleSeeAll}
              className="flex justify-center text-[13px] items-center text-red-900 py-2 px-4 rounded-md hover:bg-red-600"
            >
              See All
              {/* <img src={rightangle} alt="Arrow" /> */}
            </button>
          </div>

          {/* List of Businesses */}
          <div>
            {/* Render Businesses */}
            {/* {escalations.map((escalation, index) => ( */}
              
          
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-start space-x-4">
        {/* Search Enrollee Button */}
      
        <button
          className="flex items-center justify-center bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          Search Business
        </button>

        <button
          className="flex items-center justify-center bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          {/* <img src={plusbutton} alt="Create Ticket" className="w-5 h-5 mr-2" /> */}
          Create Ticket
        </button>
      </div>

      {/* Data Table Section */}
      <div className="overflow-x-auto mt-8 bg-white">
        {/* <table className="min-w-full"> */}
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
                  // onClick={() => setShowAll(!showAll)}
                >
                  {/* {showAll ? "Show Less" : "Show All"} */}
                </button>
              </th>
            </tr>
          </thead>

        {/* Pagination */}
        <div className="flex justify-center mt-4"></div>
      </div>
    </div>
    </div>
  );
};

export default CompanyDashboard;
