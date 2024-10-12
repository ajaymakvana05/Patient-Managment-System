import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaLock, FaFileAlt, FaShieldAlt } from "react-icons/fa"; // Importing icons

const DoctorProfileSidebar = () => {
  return (
    <div className="w-[240px]">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">Lincoln Philips</h2>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Menu</h3>

        <ul className="space-y-4">
          {/* Profile Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorprofile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaUser className="mr-2" />
              {/* Text hidden on mobile */}
              <span className="hidden md:inline">Profile</span>
            </NavLink>
          </li>

          {/* Change Password Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorchangepassword"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaLock className="mr-2" />
              <span className="hidden md:inline">Change Password</span>
            </NavLink>
          </li>

          {/* Terms & Conditions Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorTermsandconditions"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaFileAlt className="mr-2" />
              <span className="hidden md:inline">Terms & Conditions</span>
            </NavLink>
          </li>

          {/* Privacy Policy Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorprivacypolicy"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaShieldAlt className="mr-2" />
              <span className="hidden md:inline">Privacy Policy</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorProfileSidebar;
