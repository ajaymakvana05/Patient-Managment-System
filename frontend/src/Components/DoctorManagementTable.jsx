import React, { useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaSearch,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import NotFoundIcon from "../assets/images/notfound.svg";
import { useNavigate } from "react-router-dom";

// Sample data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Marcus Philips",
    avatar: "https://via.placeholder.com/50", // Placeholder avatar image
    gender: "Male",
    qualification: "MBBS",
    specialty: "Internal Medicine",
    workingTime: "6 Hour",
    checkupTime: "4 Hour",
    breakTime: "1 Hour",
  },
  {
    id: 2,
    name: "Dr. Hayle Schleifer",
    avatar: "https://via.placeholder.com/50", // Placeholder avatar image
    gender: "Female",
    qualification: "BDS",
    specialty: "Anesthesiology",
    workingTime: "7 Hour",
    checkupTime: "4 Hour",
    breakTime: "2 Hour",
  },
];

const DoctorManagementTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter doctors based on the search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Doctor Management</h1>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search doctors..."
            className="outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/adddoctorform")}
        >
          Add New Doctor
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          {/* Table Head */}
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">Doctor Name</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Qualification</th>
              <th className="p-3 text-left">Specialty</th>
              <th className="p-3 text-left">Working Time</th>
              <th className="p-3 text-left">Patient Check Up Time</th>
              <th className="p-3 text-left">Break Time</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700 text-sm">
            {filteredDoctors.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-500">
                  <img
                    src={NotFoundIcon}
                    alt="Not Found"
                    className="mx-auto mb-2"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div>No data found. Please add a new doctor.</div>
                </td>
              </tr>
            ) : (
              filteredDoctors.map((doctor) => (
                <tr key={doctor.id} className="border-b hover:bg-gray-100">
                  <td className="p-3 flex items-center">
                    <img
                      src={doctor.avatar}
                      alt="Doctor Avatar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    {doctor.name}
                  </td>
                  <td className="p-3">
                    {doctor.gender === "Male" ? (
                      <FaMale className="text-blue-500" />
                    ) : (
                      <FaFemale className="text-pink-500" />
                    )}
                  </td>
                  <td className="p-3">{doctor.qualification}</td>
                  <td className="p-3">{doctor.specialty}</td>
                  <td className="p-3">
                    <span className="bg-white text-[#718EBF] py-1 px-3 rounded-full shadow-sm">
                      {doctor.workingTime}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="bg-[#F6F8FB] text-[#718EBF] py-1 px-3 rounded-full shadow-sm">
                      {doctor.checkupTime}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="bg-white text-[#718EBF] py-1 px-3 rounded-full shadow-sm">
                      {doctor.breakTime}
                    </span>
                  </td>
                  <td className="p-3 text-center flex justify-center space-x-2">
                    <button className="text-blue hover:text-blue">
                      <FaEye className="w-5 h-5" />
                    </button>
                    <button className="text-green hover:text-green">
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button className="text-red hover:text-red">
                      <FaTrashAlt className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorManagementTable;
