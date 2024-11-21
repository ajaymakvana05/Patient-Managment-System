import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../assets/images/cards.svg";
import Cash from "../../assets/images/Cash.svg";
import PatientPaymentMethodPopUp from "./PatientPaymentMethodPopUp";
import { FaRupeeSign } from 'react-icons/fa';


const PatientUnpaidBillsInvoice = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('online'); 
  const [isCashPopupOpen, setIsCashPopupOpen] = useState(false);

  const handlePaymentChange = (paymentType) => {
      setSelectedPayment(paymentType);
  };

  const handlePayNow = () => {
      if (selectedPayment === 'online') {
          setIsPaymentPopupOpen(true);
          setIsCashPopupOpen(false);
      } else if (selectedPayment === 'cash') {
          setIsPaymentPopupOpen(false);
          setIsCashPopupOpen(true);
      }
  };

 

  const handleOpenPopup = () => {
    setShowPopup(true);
  };



  const navigate = useNavigate();
  return (
    <div className="max-w-full lg:max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg mt-5 sm:mt-5">
      <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="text-blue text-3xl sm:text-4xl mr-2">
            <i className="fas fa-hospital"></i>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-blue">
              Hospital
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">Tagline here</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue">Invoice</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mb-2">
        <div className="mb-2 w-full sm:w-auto flex-1">
          <h3 className="text-lg sm:text-xl font-bold">Dr. Bharat Patel</h3>
          <p className="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mattis turpis nulla, finibus sodales erat porta eu.
          </p>
        </div>
        <div className="w-full sm:w-auto text-sm sm:text-base">
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Bill No:</span> 1234
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Bill Date:</span> 20 June, 2020
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Bill Time:</span> 10:45 PM
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg  mb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Name:</span> Miracle Kenter
            </p>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Gender:</span> Male
            </p>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Age:</span> 36 Years
            </p>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Address:</span> B-105 Virat Bungalows,
              Punagam Motavaracha Jamnagar.
            </p>
          </div>
          <div>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Disease Name:</span> Jaxson Saris
            </p>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Phone Number:</span> 9957 96557
            </p>
            <p className="text-sm text-greyBlue">
              <span className="font-semibold	 text-black">Payment Type:</span> Insurance
            </p>
          </div>
        </div>
      </div>

      <div className=" mb-2 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-blue text-white">
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                Description
              </th>
              <th className="p-2 sm:p-3 text-right text-sm sm:text-base">
                Amount
              </th>
              <th className="p-2 sm:p-3 text-right text-sm sm:text-base">
                Qty.
              </th>
              <th className="p-2 sm:p-3 text-right text-sm sm:text-base">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 sm:p-3">Neuromuscular blockers</td>
              <td className="p-2 sm:p-3 text-right">₹ 12000.00</td>
              <td className="p-2 sm:p-3 text-right">2</td>
              <td className="p-2 sm:p-3 text-right">₹ 24000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 sm:p-3">Neuromuscular blockers</td>
              <td className="p-2 sm:p-3 text-right">₹ 8000.00</td>
              <td className="p-2 sm:p-3 text-right">1</td>
              <td className="p-2 sm:p-3 text-right">₹ 8000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 sm:p-3">
                Leucovorin with high dose methotrexate (HDMTX)
              </td>
              <td className="p-2 sm:p-3 text-right">₹ 1000.00</td>
              <td className="p-2 sm:p-3 text-right">2</td>
              <td className="p-2 sm:p-3 text-right">₹ 2000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 sm:p-3">
                Hydroxyurea for sickle cell disease
              </td>
              <td className="p-2 sm:p-3 text-right">₹ 20.00</td>
              <td className="p-2 sm:p-3 text-right">2</td>
              <td className="p-2 sm:p-3 text-right">₹ 40.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mb-2">
        <div>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Insurance Company:</span> HDFC life
            Insurance
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Insurance Plan:</span> Health insurance
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Claim Amount:</span>{" "}
            <span className="text-blue">₹ 2000.00</span>
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Claimed Amount:</span>{" "}
            <span className="text-blue">₹ 2500.00</span>
          </p>
        </div>
        <div className="text-right text-sm sm:text-base">
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Amount:</span> ₹ 25840.00
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Discount 5%:</span> ₹ 1292.00
          </p>
          <p className="text-sm text-greyBlue">
            <span className="font-semibold	 text-black">Tax:</span> ₹ 1220.00
          </p>
          <p className="text-lg sm:text-xl font-bold">
            <span className="font-semibold	 text-black">Total Amount:</span>{" "}
            <span className="text-blue">₹ 24668.00</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center bg-blue text-white p-4 rounded-lg">
        <p className="text-sm sm:text-base">Call : +90854 22354</p>
        <p className="text-sm sm:text-base">Email : Hello@Gmail.com</p>
      </div>

      <div className="m-auto w-full sm:w-3/12 mt-3">
        <button
          onClick={handleOpenPopup}
          className="bg-blue hover:bg-blue flex justify-center text-white font-bold py-2 px-4 rounded w-full"
        >
          Pay Now
        </button>
      </div>

      {showPopup && (
       <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex justify-center items-center w-full">
       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
           <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Payment Type</h2>
           <div className="space-y-4">
               {/* Online Payment Option */}
               <div
                   className={`flex items-center justify-between p-4 bg-gray-100 rounded-lg ${
                       selectedPayment === 'online' ? 'bg-blue-100' : ''
                   }`}
                   onClick={() => handlePaymentChange('online')}
               >
                   <div className="flex items-center gap-2">
                       <img src={Cards} alt="Online Payment" />
                       <span className={`text-gray-900 ${selectedPayment === 'online' ? 'font-bold' : ''}`}>
                           Online
                       </span>
                   </div>
                   <input
                       type="radio"
                       name="payment"
                       className="form-radio text-blue-500"
                       checked={selectedPayment === 'online'}
                       readOnly
                   />
               </div>
               {/* Cash Payment Option */}
               <div
                   className={`flex items-center justify-between p-4 bg-gray-100 rounded-lg ${
                       selectedPayment === 'cash' ? 'bg-blue-100' : ''
                   }`}
                   onClick={() => handlePaymentChange('cash')}
               >
                   <div className="flex items-center gap-2">
                       <img src={Cash} alt="Cash Payment" />
                       <span className={`text-gray-400 ${selectedPayment === 'cash' ? 'font-bold' : ''}`}>
                           Cash
                       </span>
                   </div>
                   <input
                       type="radio"
                       name="payment"
                       className="form-radio text-blue-500"
                       checked={selectedPayment === 'cash'}
                       readOnly
                   />
               </div>
           </div>
           <div className="flex justify-between mt-6">
               <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700" onClick={() => navigate("/bills/patientunpaidbills")}>
                   Cancel
               </button>
               <button className="px-4 py-2 bg-blue text-white rounded-lg" onClick={handlePayNow}>
                   Pay Now
               </button>
           </div>
       </div>

       {/* Online Payment Popup */}
       {isPaymentPopupOpen && (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
               <PatientPaymentMethodPopUp />
              
           </div>
       )}

       {/* Cash Delivery Popup */}
       {isCashPopupOpen && (
           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                 <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
              <div className="flex justify-center mb-4">
                <div className="bg-green rounded-full p-4">
                <FaRupeeSign className="text-white text-2xl" />
                </div>
              </div>
              <h2 className="text-center text-xl font-bold text-gray-800 mb-2">Payment</h2>
              <p className="text-center text-gray-600 mb-4">
                Pay your bill at cash counter for confirm your bill.
              </p>
              <div className="flex justify-center">
                <button className="bg-green text-white py-2 px-6 rounded-lg w-full" onClick={() => navigate("/bills/patientunpaidbills")}>Okay</button>
              </div>
            </div>
          </div>
           </div>
       )}
   </div>
      )}

      
    </div>
  );
};

export default PatientUnpaidBillsInvoice;
