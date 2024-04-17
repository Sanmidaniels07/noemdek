import settings from "../../assets/settings.png";
import { useState } from "react";
import {
    FaBars,
    FaTimes,
  } from "react-icons/fa"

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <nav className="p-4 justify-between items-center mt-2 hidden md:flex">
      {/* Search Input */}
      <div className="hidden sm:flex sm:justify-between ">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-4 rounded-md mr-4 text-gray focus:outline-none focus:bg-gray-600 w-[300px] h-[30px]"
        />
      </div>

      {/* Icons */}
      <div className="hidden sm:flex ml-[40rem]">
        {/* Notification Icon */}
        <div className="text-gray mr-4 cursor-pointer flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1"
            />
          </svg>
          <div>Notifications</div>
        </div>

        {/* Tools Icon */}
        <div className="text-gray flex gap-3 mr-4 cursor-pointer">
          <div>
            {" "}
            <img className="h-5 w-5" src={settings} alt="" />
          </div>
          <div className="text-gray">Tools</div>
        </div>

        {/* Help Icon */}
        <div className="text-gray flex gap-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M12 6v2m0 8v2m-3-3h6"
            />
          </svg>
          <div  className="text-gray">Help</div>
        </div>
      </div>
      </div>

      <div onClick={handleClick} className="md:hidden z-10">
        {!toggle ? <FaBars /> : <FaTimes />}
      </div>

      <div className={
          !toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-400 flex flex-col justify-center items-center"
        }>
            <div>
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-4 rounded-md mr-4 text-gray focus:outline-none focus:bg-gray-600 w-[200px] h-[30px]"
        />
        </div>
      


      {/* Icons */}
      <div >
        {/* Notification Icon */}
        <div onClick={handleClick} className="text-gray mr-4 cursor-pointer flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1"
            />
          </svg>
          <div>Notifications</div>
        </div>

        {/* Tools Icon */}
        <div  className="text-gray flex gap-3 mr-4 cursor-pointer">
          <div onClick={handleClick}>
            {" "}
            <img className="h-5 w-5" src={settings} alt="" />
          </div>
          <div onClick={handleClick} className="text-gray">Tools</div>
        </div>

        {/* Help Icon */}
        <div onClick={handleClick} className="text-gray flex gap-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M12 6v2m0 8v2m-3-3h6"
            />
          </svg>
          <div className="text-gray">Help</div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
