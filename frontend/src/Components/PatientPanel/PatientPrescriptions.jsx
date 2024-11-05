import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const PatientPrescriptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const prescriptions = [
    {
      doctor: "Dr. Ryan Vetrows",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-check-circle",
      iconColor: "text-blue",
    },
    {
      doctor: "Dr. Omar Herwitz",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    //... other prescriptions
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Prescriptions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prescriptions.map((prescription, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{prescription.doctor}</h2>
              <button onClick={togglePopup}>
                <AiFillEye className={`${prescription.iconColor}`} />
              </button>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-semibold">Hospital Name</span>{" "}
                {prescription.hospital}
              </p>
              <p>
                <span className="font-semibold">Disease Name</span>{" "}
                {prescription.disease}
              </p>
              <p>
                <span className="font-semibold">Date</span> {prescription.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup/Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-[676px] max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Prescription</h1>
              <button className="text-red text-xl" onClick={togglePopup}>
                <FaTimes />
              </button>
            </div>
            <div className=" p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="text-blue text-3xl mr-2">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <div>
                    <h2 className="text-blue text-xl font-bold">Hospital</h2>
                    <p className="text-sm text-gray-500">Tagline here</p>
                  </div>
                </div>
                <div className="text-right">
                  <h2 className="text-blue text-xl font-bold">
                    Dr. Bharat Patel
                  </h2>
                  <p className="text-sm text-gray-500">
                    Obstetrics and Gynecology
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p>
                    <span className="font-bold">Hospital Name :</span> Medical
                    Center
                  </p>
                  <p>
                    <span className="font-bold">Patient Name :</span> Alabatro
                    Bhajirao
                  </p>
                  <p>
                    <span className="font-bold">Gender :</span> Male
                  </p>
                  <p>
                    <span className="font-bold">Address :</span> B-105 Virat
                    Bungalows, Punagam Motavaracha, Jamnagar.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Prescription Date :</span> 2
                    Jan, 2022
                  </p>
                  <p>
                    <span className="font-bold">Age :</span> 36 Year
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-greyLightest text-left text-sm font-bold text-gray-700 whitespace-nowrap">
                      Medicine Name
                    </th>
                    <th className="py-2 px-4 bg-greyLightest text-left text-sm font-bold text-gray-700 whitespace-nowrap">
                      Strength
                    </th>
                    <th className="py-2 px-4 bg-greyLightest  text-left text-sm font-bold text-gray-700 whitespace-nowrap">
                      Dose
                    </th>
                    <th className="py-2 px-4 bg-greyLightest text-left text-sm font-bold text-gray-700 whitespace-nowrap hidden md:table-cell">
                      Duration
                    </th>
                    <th className="py-2 px-4 bg-greyLightest text-left text-sm font-bold text-gray-700 whitespace-nowrap hidden md:table-cell">
                      When to take
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Calcium carbonate</td>
                    <td className="py-2 px-4 border-b">100 Mg</td>
                    <td className="py-2 px-4 border-b">1-0-1</td>
                    <td className="py-2 px-4 border-b hidden md:table-cell">
                      2 Day
                    </td>
                    <td className="py-2 px-4 border-b hidden md:table-cell">
                      <button className="bg-lite2Blue text-liteBlue px-2 py-1 rounded-full">
                        Before Food
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-gray-700 whitespace-nowrap">
                Additional Note
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Doctor Signature</p>
                <div className="mt-2">
                  <img
                    src="https://placehold.co/100x50"
                    alt="Doctor Signature"
                    className="mx-auto"
                  />
                </div>
              </div>
              <button className="bg-blue text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-download mr-2"></i> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientPrescriptions;
