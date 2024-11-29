import { useEffect, useState } from "react";
import eachuser from '../../assets/eachuser.svg';
import alarm from '../../assets/alarmicon.svg';
import messages from "../../assets/messages.svg";

const NavBar = () => {
  // State to manage the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>("");

  useEffect(() => {
    // Retrieve the user data from localStorage
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }  
    console.log(`User Name: ${storedUserName}`);
  }, []);


  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="relative w-full h-[56px] shadow rounded-lg p-2 flex items-center justify-between">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 w-[300px]">
        <span className="material-icons text-gray-500"></span>
        <input
          type="text"
          placeholder="Search Here..."
          className="bg-transparent border-none outline-none w-full text-sm text-gray-600"
        />
      </div>

      {/* Right Section */}
      <div className="flex bg-blue-100 gap-4">
        <div className="relative flex items-center gap-2">
          <img
            src={alarm}
            alt="avatar"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            4
          </div>
        </div>

        <div className="relative flex items-center gap-2">
          <img
            src={messages}
            alt="messages"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            2
          </div>
        </div>

        <div className="relative flex items-center gap-2"></div>

        {/* Customer Service */}
        <div className="flex items-center gap-2 bg-red-100 text-red-600 text-xs rounded-full px-2 py-1">
          <img
            src={eachuser}
            onClick={toggleDropdown}
            alt="avatar"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <span className="w-2 h-2 bg-red-600 rounded-full" />
          Hi, {userName || "Guest"}


         
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-8 bg-white shadow-lg rounded-lg w-48 p-2">
            <ul>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
