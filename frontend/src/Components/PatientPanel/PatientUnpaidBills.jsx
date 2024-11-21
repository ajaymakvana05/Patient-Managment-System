import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import PatientInvoice from "./PatientInvoice";

const PatientUnpaidBills = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("unpaid");
  const [bills, setBills] = useState({
    unpaid: [
      {
        id: 1,
        doctor: "Dr. Nolan George",
        hospital: "Shamala Hospital",
        date: "2 Jan, 2022",
        time: "10:00 AM",
        amount: "₹ 2,646",
      },
      {
        id: 2,
        doctor: "Dr. Nolan George",
        hospital: "Shamala Hospital",
        date: "2 Jan, 2022",
        time: "9:00 AM",
        amount: "₹ 5,320",
      },
      {
        id: 3,
        doctor: "Dr. Nolan George",
        hospital: "Shamala Hospital",
        date: "2 Jan, 2022",
        time: "10:02 AM",
        amount: "₹ 2,520",
      },
    ],
    paid: [
      {
        id: 4,
        doctor: "Dr. Amanda Smith",
        hospital: "Global Hospital",
        date: "15 Dec, 2021",
        time: "8:30 AM",
        amount: "₹ 1,200",
      },
    ],
  });

  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const handleOpenInvoice = (bill) => {
    setSelectedBill(bill);
    setShowInvoice(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoice(false);
    setSelectedBill(null);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`text-lg font-semibold pb-2 ${
            activeTab === "unpaid"
              ? "text-blue border-b-2 border-blue"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("unpaid")}
        >
          Unpaid Bills
        </button>
        <button
          className={`text-lg font-semibold pb-2 ${
            activeTab === "paid"
              ? "text-blue border-b-2 border-blue"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("paid")}
        >
          Paid Bills
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">
        {activeTab === "unpaid" ? "Unpaid Bills" : "Paid Bills"}
      </h1>

      {/* Bills List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bills[activeTab].length > 0 ? (
          bills[activeTab].map((bill) => (
            <div key={bill.id} className="border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{bill.doctor}</h2>
                <AiFillEye
                  onClick={() => handleOpenInvoice(bill)}
                  className="text-blue text-xl"
                />
              </div>

              <div className="text-gray-600 mb-2 flex justify-between">
                <div>Hospital Name</div>
                <div className="font-medium">{bill.hospital}</div>
              </div>
              <div className="text-gray-600 mb-2 flex justify-between">
                <div>Bill Created Date</div>
                <div className="font-medium">{bill.date}</div>
              </div>
              <div className="text-gray-600 mb-2 flex justify-between">
                <div>Bill Created Time</div>
                <div className="font-medium">{bill.time}</div>
              </div>
              <div className="text-gray-600 mb-4 flex justify-between">
                <div>Total Bill Amount</div>
                <div
                  className={`font-medium ${
                    activeTab === "paid" ? "text-green" : "text-red"
                  }`}
                >
                  {bill.amount}
                </div>
              </div>
              {activeTab === "unpaid" && (
                <button
                  className="w-full bg-blue text-white py-2 rounded-lg"
                  onClick={() => navigate("/bills/patientunpaidbillsinvoice")}
                >
                  Pay Now
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No {activeTab} bills found.
          </p>
        )}
      </div>
      {showInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
         <PatientInvoice/>
        </div>
      )}
    </div>
  );
};

export default PatientUnpaidBills;
