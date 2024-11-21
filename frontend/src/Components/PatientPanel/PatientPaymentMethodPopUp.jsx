import React, { useState } from 'react'
import Pay1 from "../../assets/images/pay1.svg"
import Pay2 from "../../assets/images/pay2.svg"
import Group from "../../assets/images/Group.svg"
import { useNavigate } from 'react-router-dom'

const PatientPaymentMethodPopUp = () => {
    const [selectedPayment, setSelectedPayment] = useState('mastercard'); 
    const navigate = useNavigate()

    const handlePaymentChange = (paymentMethod) => {
      setSelectedPayment(paymentMethod);
  };
  
    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
    
                
                    <div
                        className={`border rounded-lg p-4 mb-4 ${
                            selectedPayment === 'mastercard' ? '' : 'opacity-50'
                        }`}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={Pay1}
                                alt="MasterCard Logo"
                                className="mr-2"
                            />
                            <span className="font-semibold text-lg">MasterCard</span>
                            <input
                                type="radio"
                                name="payment"
                                className="ml-auto"
                                checked={selectedPayment === 'mastercard'}
                                onChange={() => handlePaymentChange('mastercard')}
                            />
                        </div>
                        {selectedPayment === 'mastercard' && (
                            <div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Card Holder Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Marcus George"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Card Number<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            defaultValue="1234 4567 8745 5212"
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                        <img
                                            src={Group}
                                            alt="MasterCard Logo"
                                            className="absolute right-2 top-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Expiry Date<span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                defaultValue="11 March"
                                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                            />
                                            <i className="far fa-calendar-alt absolute right-2 top-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            CVV<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="123"
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
    
                    {/* Visa Card Section */}
                    <div
                        className={`border rounded-lg p-4 mb-4 ${
                            selectedPayment === 'visa' ? '' : 'opacity-50'
                        }`}
                    >
                        <div className="flex items-center">
                            <img
                                src={Pay2}
                                alt="VisaCard Logo"
                                className="mr-2"
                            />
                            <span className="font-semibold text-lg text-gray-400">Visa Card</span>
                            <input
                                type="radio"
                                name="payment"
                                className="ml-auto"
                                checked={selectedPayment === 'visa'}
                                onChange={() => handlePaymentChange('visa')}
                            />
                        </div>
                        {selectedPayment === 'visa' && (
                            <div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Card Holder Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Jane Doe"
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Card Number<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            defaultValue="5678 9101 1121 3141"
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                        <img
                                            src={Group}
                                            alt="VisaCard Logo"
                                            className="absolute right-2 top-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Expiry Date<span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                defaultValue="12 April"
                                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                            />
                                            <i className="far fa-calendar-alt absolute right-2 top-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            CVV<span className="text-red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="456"
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
    
                    {/* Action Buttons */}
                    <div className="flex justify-between">
                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded" onClick={() => navigate("/bills/patientunpaidbills")}>
                            Cancel
                        </button>
                        <button className="bg-blue text-white font-semibold py-2 px-4 rounded">
                            Pay Now
                        </button>
                    </div>
                </div>
  )
}

export default PatientPaymentMethodPopUp