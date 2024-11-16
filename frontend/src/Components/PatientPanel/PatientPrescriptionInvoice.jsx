import React from "react";
import VectorIcon from "../../assets/images/Vector.svg";
import { useNavigate } from "react-router-dom";

const PatientPrescriptionInvoice = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-4">
        <div className="flex justify-between items-center border-b pb-4 mb-2">
          <h1 className="text-xl font-bold">Prescription</h1>
          <button
            className="text-red text-xl"
            onClick={() =>
              navigate("/prescriptionaccess/patientprescriptionaccess")
            }
          >
            &times;
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-2">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="text-blue text-4xl mr-2">
                <img src={VectorIcon} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue">Hospital</h2>
                <p className="text-sm text-blue">tagline here</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold text-blue">Dr. Bharat Patel</h2>
              <p className="text-sm text-gray-500">Obstetrics and gynecology</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p>
                <span className="font-bold">Hospital Name</span>: Medical Center
              </p>
              <p>
                <span className="font-bold">Patient Name</span>: Alatbrao
                Bhaijrao
              </p>
              <p>
                <span className="font-bold">Gender</span>: Male
              </p>
              <p>
                <span className="font-bold">Address</span>: B-105 Virat
                Bungalows Punagam Motavaracha Jamnagar.
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Prescription Date</span>: 2 Jan,
                2022
              </p>
              <p>
                <span className="font-bold">Age</span>: 36 Year
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-2 border-b">Medicine Name</th>
                <th className="py-2 px-2 border-b">Strength</th>
                <th className="py-2 px-2 border-b">Dose</th>
                <th className="py-2 px-2 border-b hidden md:table-cell">
                  Duration
                </th>
                <th className="py-2 px-2 border-b hidden md:table-cell">
                  When to take
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-2 border-b">Calcium carbonate</td>
                <td className="py-2 px-2 border-b">100 Mg</td>
                <td className="py-2 px-2 border-b">1-0-1</td>
                <td className="py-2 px-2 border-b hidden md:table-cell">
                  <span className="bg-green/10 text-green px-2 py-1 rounded">
                    2 Day
                  </span>
                </td>
                <td className="py-2 px-2 border-b hidden md:table-cell">
                  <span className="bg-blue text-white text-sm px-2 py-1 rounded">
                    Before Food
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2">
          <h3 className="font-bold">Additional Note</h3>
          <p className="text-sm text-gray-700 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Doctor Signature</p>
            <div className="mt-2">
              <img src="https://placehold.co/100x50" alt="Doctor's signature" />
            </div>
          </div>
          <button className="bg-blue text-white text-sm px-2 py-2 rounded flex items-center">
            <i className="fas fa-download mr-2"></i> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientPrescriptionInvoice;