import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BillingPayments = () => {
  const navigate = useNavigate();

  const bills = [
    {
      billNo: 5654,
      patient: "Charlie Vaccaro",
      disease: "Colds and Flu",
      status: "Paid",
    },
    {
      billNo: 5654,
      patient: "James George",
      disease: "Conjunctivitis",
      status: "Unpaid",
    },
    {
      billNo: 5654,
      patient: "Craig Torff",
      disease: "Allergies",
      status: "Paid",
    },
    {
      billNo: 5654,
      patient: "Chance Lipshutz",
      disease: "Diarrhea",
      status: "Unpaid",
    },
    {
      billNo: 5654,
      patient: "Gustavo Saris",
      disease: "Headaches",
      status: "Paid",
    },
    {
      billNo: 5654,
      patient: "Carter Bator",
      disease: "Mononucleosis",
      status: "Unpaid",
    },
    {
      billNo: 5654,
      patient: "Kadin Schleifer",
      disease: "Stomach Aches",
      status: "Paid",
    },
  ];

  const handleProfileClick = () => {
    navigate("/createbillForm");
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold text-text-dark">
          Billing & Payments
        </h2>
        <button
          className="bg-primary text-white px-2 py-2 rounded-md hover:bg-primary-light"
          onClick={handleProfileClick}
        >
          Create Bills
        </button>
      </div>
      <p className="text-status-unpaid mb-4 font-semibold">
        ● Pending Bills: 50
      </p>
      <div className="overflow-x-scroll w-full h-full">
        {/* Ensures horizontal scroll */}
        <table className="min-w-full h-full bg-background-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-2 bg-background-light text-left font-medium text-sm	">
                Bill No
              </th>
              <th className="py-2 px-2 bg-background-light text-left font-medium text-sm	">
                Patient Name
              </th>
              <th className="py-2 px-2 bg-background-light text-left font-medium text-sm	">
                Disease Name
              </th>
              <th className="py-2 px-2 bg-background-light text-left font-medium text-sm	">
                Status
              </th>
              <th className="py-2 px-2 bg-background-light text-left font-medium text-sm	">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-2 text-xs	 text-primary hover:underline cursor-pointer">
                  {bill.billNo}
                </td>
                <td className="py-2 px-2 text-xs	">{bill.patient}</td>
                <td className="py-2 px-2 text-xs	">{bill.disease}</td>
                <td className="py-2 px-2 text-xs	">
                  <span
                    className={`py-1 px-3 rounded-full text-white  text-xs	 ${
                      bill.status === "Paid"
                        ? "bg-status-paid"
                        : "bg-status-unpaid"
                    }`}
                  >
                    {bill.status}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <button className="text-primary hover:text-primary-dark text-xs	">
                    <FaEye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BillingPayments;
