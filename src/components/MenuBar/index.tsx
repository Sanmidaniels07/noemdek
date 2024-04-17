import { useState } from "react";
import profile from "../../assets/profile.png";
import home from "../../assets/home.png";
import settings from "../../assets/settings.png";
import money from "../../assets/money.png";
import bond from "../../assets/bond.png";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showReservationDropdown, setShowReservationDropdown] = useState(false);
  const [showOperationDropdown, setShowOperationDropdown] = useState(false);
  const [showInfrastructureDropdown, setShowInfrastructureDropdown] =
    useState(false);
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [showSetupDropdown, setShowSetupDropdown] = useState(false);

  const toggleBusinessDropdown = () => {
    setShowBusinessDropdown(!showBusinessDropdown);
  };

  const toggleReservationDropdown = () => {
    setShowReservationDropdown(!showReservationDropdown);
  };
  const toggleOperation = () => {
    setShowOperationDropdown(!showOperationDropdown);
  };
  const toggleInfrastructure = () => {
    setShowInfrastructureDropdown(!showInfrastructureDropdown);
  };
  const toggleReportDropdown = () => {
    setShowReportDropdown(!showReportDropdown);
  };
  const toggleSetupDropdown = () => {
    setShowSetupDropdown(!showSetupDropdown);
  };

  return (
    <div className="flex  items-center pl-1">
      {/* Sidebar */}
      <div className="p-2 flex flex-col justify-center items-center w-40 bg-blue-900 md:h-[66.5rem] h-[105rem] sm:mt-0 mt-20 space-y-4">
        <ul className=" flex flex-col space-y-7 text-white mb-[90px] items-center">
          <li>
            <img
              className="h-[110px] w-[110px] flex justify-center items-center"
              src={profile}
              alt="profile"
            />
          </li>
          <div className="space-y-2 text-center">
            <li>
              <h6 className="text-center">Kemi Tunde</h6>
            </li>
            <li>
              <p className="text-center text-xs text-gray-300 space-y-0">
                Admin
              </p>
            </li>
          </div>
          <li className="flex gap-2 items-center">
            <li>
              <img className="h-5 w-5" src={home} alt="" />
            </li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <div className="border-2 border-white m-auto w-[170px]"></div>
          <li
            className="relative"
            style={{ marginBottom: showBusinessDropdown ? "7rem" : "0" }}
          >
            <div className="flex " onClick={toggleBusinessDropdown}>
              <img className="h-5 w-5 ml-5" src={money} alt="" />
              <button className="">Business Development</button>
            </div>
            {showBusinessDropdown && (
              <div className="absolute flex flex-col justify-center bg-blue-900 w-full text-center items-center mt-4">
                <ul className="text-white text-xs space-y-4 text-center">
                  <li>
                    <a href="#">Opportunities/Tenders</a>
                  </li>
                  <li>
                    <a href="#">Customers</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative"
            style={{ marginBottom: showReservationDropdown ? "5rem" : "0" }}
          >
            <div className="flex gap-2" onClick={toggleReservationDropdown}>
              <li>
                <img className="h-5 w-5" src={bond} alt="" />
              </li>
              <button className="">Reservations</button>
            </div>
            {showReservationDropdown && (
              <div className="absolute bg-blue-900 w-full mt-4">
                <ul className="text-white text-xs space-y-4 text-center">
                  <li>
                    <a href="">Bookings</a>
                  </li>
                  <li>
                    <Link to="/scheduling">Scheduling</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative"
            style={{ marginBottom: showOperationDropdown ? "15rem" : "0" }}
          >
            <div className="flex gap-2" onClick={toggleOperation}>
              <li>
                <img className="h-5 w-5" src={money} alt="" />
              </li>
              <button className="">Operations</button>
            </div>
            {showOperationDropdown && (
              <div className="absolute bg-blue-900 w-full mt-4">
                <ul className="text-white text-xs space-y-4 text-center">
                  <li>
                    <a href="#">Checklist</a>
                  </li>
                  <li>
                    <a href="#">Movement logs</a>
                  </li>
                  <li>
                    <a href="#">Maintenance</a>
                  </li>
                  <li>
                    <a href="#">Driver Performance</a>
                  </li>
                  <li>
                    <a href="#">Incident</a>
                  </li>
                  <li>
                    <a href="#">Violations</a>
                  </li>
                  <li>
                    <a href="#">Expenses</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            className="relative"
            style={{ marginBottom: showInfrastructureDropdown ? "15rem" : "0" }}
          >
            <div className="flex gap-2" onClick={toggleInfrastructure}>
              <li>
                <img className="h-5 w-5" src={bond} alt="" />
              </li>
              <button className="">Infrastructure</button>
            </div>
            {showInfrastructureDropdown && (
              <div className="absolute bg-blue-900 w-full mt-4">
                <ul className="text-white text-xs space-y-4 text-center">
                  <li>
                    <a href="#">Drivers</a>
                  </li>
                  <li>
                    <a href="#">Vehicle</a>
                  </li>
                  <li>
                    <a href="#">Fuel Card</a>
                  </li>
                  <li>
                    <a href="#">Inventory</a>
                  </li>
                  <li>
                    <a href="#">Third party assets</a>
                  </li>
                  <li>
                    <a href="#">Vendors</a>
                  </li>
                  <li>
                    <a href="#">Payroll</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="relative"
            style={{ marginBottom: showReportDropdown ? "8rem" : "0" }}
          >
            <div className="flex gap-2" onClick={toggleReportDropdown}>
              <li>
                <img className="h-5 w-5" src={bond} alt="" />
              </li>
              <button className="">Reports & Tools</button>
            </div>
            {showReportDropdown && (
              <div className="absolute bg-blue-900 w-full mt-4">
                <ul className="text-white text-xs space-y-4 text-center">
                  <li>
                    <a href="#">Financials</a>
                  </li>
                  <li>
                    <a href="#">Duty Calculator</a>
                  </li>
                  <li>
                    <a href="#">Operational Stats</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            className="relative"
            style={{ marginBottom: showSetupDropdown ? "8rem" : "0" }}
          >
            <div className="flex gap-2" onClick={toggleSetupDropdown}>
              <li>
                <img className="h-5 w-5" src={settings} alt="" />
              </li>
              <button className="">Setup</button>
            </div>
            {showSetupDropdown && (
              <div className="absolute bg-blue-900 w-full mt-4">
                <ul className="text-white text-xs space-y-4 text-center">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <a href="#">Users</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Categories</a>
                  </li>
                  <li>
                    <a href="#">Approval Workflow</a>
                  </li>
                  <li>
                    <a href="#">Metrics</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      {/* Submenus */}
      {/* <div className="flex ml-4 space-x-4 mb-auto mt-2">
        <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Profile</a>
        </div> */}
    </div>
  );
};

export default MenuBar;
