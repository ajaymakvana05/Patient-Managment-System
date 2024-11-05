import React, { useState } from "react";
import { FaCalendarAlt, FaFileAlt, FaDownload, FaEye } from "react-icons/fa";
import PatientPrescriptionInvoice from "./PatientPanel/PatientPrescriptionInvoice";

const PatientPrescriptionAccess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Prescription Access</h1>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-gray-500" />{" "}
          <span className="text-gray-500">2 Jan, 2022 - 13 Jan, 2022</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(5)
          .fill()
          .map((_, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-semibold">Dr. Ryan Vetrous</h2>
                </div>
                <div className="flex items-center space-x-1">
                  <FaEye
                    className="text-blue text-xs"
                    title="View"
                    onClick={handleViewClick}
                  />
                  <FaDownload className="text-blue text-xs" title="Download" />
                </div>
                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50 z-50 overflow-x-auto">
                    <PatientPrescriptionInvoice />
                  </div>
                )}
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-sm text-gray-500">Hospital Name </p>
                <p className="text-sm">Artemis Hospital</p>
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-sm text-gray-500">Disease Name</p>
                <p className="text-sm">Viral Infection</p>
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-sm">2 Jan, 2022</p>
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-sm">10:03 AM</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaFileAlt className="text-blue" />

                <span className="text-sm">Prescription.JPG</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PatientPrescriptionAccess;
