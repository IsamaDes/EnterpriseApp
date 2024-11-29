




import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-[45px] bg-[#121638] col-auto justify-items-center">
        {/* Add icons here if needed */}
      </div>
      <div className="bg-white w-[230px] border min-h-screen justify-center items-center">
       
        <div
          className="mt-14 flex px-10 cursor-pointer hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/company-Dashboard")}
        >
          <p className="ml-2">Dashboard</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer  hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/register-business")}
        >
          <p className="ml-2">Register Business</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer  hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/qc-module")}
        >
          <p className="ml-2">QC Module</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer  hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/agents-dashboard")}
        >
          <p className="ml-2">Agents Dashboard</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/company-settings")}
        >
          <p className="ml-2">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
