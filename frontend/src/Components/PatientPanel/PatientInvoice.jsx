import React from 'react'

const PatientInvoice = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md mt-4">
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2">
                <img src="https://placehold.co/50x50" alt="Hospital logo" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-blue-500">Hospital</h1>
                <p className="text-gray-500">tagline here</p>
            </div>
        </div>
        <div className="text-right">
            <h2 className="text-3xl font-bold text-blue-500">Invoice</h2>
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dr. Bharat Patel</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis turpis nulla, finibus sodales erat porta eu.</p>
        </div>
        <div className="text-right">
            <p><span className="font-bold">Bill No :</span> 1234</p>
            <p><span className="font-bold">Bill Date :</span> 20 June, 2020</p>
            <p><span className="font-bold">Bill Time :</span> 10:45 PM</p>
        </div>
    </div>
    <div className="bg-gray-100 p-4 rounded mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p><span className="font-bold">Name :</span> Miracle Kenter</p>
                <p><span className="font-bold">Gender :</span> Male</p>
                <p><span className="font-bold">Age :</span> 36 Years</p>
                <p><span className="font-bold">Address :</span> B-105 Virat Bungalows Punagam Motavaracha Jamnagar.</p>
            </div>
            <div>
                <p><span className="font-bold">Disease Name :</span> Stomach Ach</p>
                <p><span className="font-bold">Phone Number :</span> 9957 96557</p>
                <p><span className="font-bold">Payment Type :</span> <span className="text-blue-500">Insurance</span></p>
            </div>
        </div>
    </div>
    <table className="w-full mb-4">
        <thead>
            <tr className="bg-blue-500 text-white">
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Qty.</th>
                <th className="p-2 text-left">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b">
                <td className="p-2">Neuromuscular blockers</td>
                <td className="p-2">₹ 12000.00</td>
                <td className="p-2">2</td>
                <td className="p-2">₹ 24000.00</td>
            </tr>
            <tr className="border-b">
                <td className="p-2">Neuromuscular blockers</td>
                <td className="p-2">₹ 800.00</td>
                <td className="p-2">2</td>
                <td className="p-2">₹ 1600.00</td>
            </tr>
            <tr className="border-b">
                <td className="p-2">Leucovorin with high dose methotrexate (HDMTX)</td>
                <td className="p-2">₹ 1000.00</td>
                <td className="p-2">2</td>
                <td className="p-2">₹ 2000.00</td>
            </tr>
            <tr className="border-b">
                <td className="p-2">Hydroxyurea for sickle cell disease</td>
                <td className="p-2">₹ 20.00</td>
                <td className="p-2">2</td>
                <td className="p-2">₹ 40.00</td>
            </tr>
        </tbody>
    </table>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <p><span className="font-bold">Insurance Company :</span> HDFC life Insurance</p>
            <p><span className="font-bold">Insurance Plan :</span> Helth insurance</p>
            <p><span className="font-bold">Claim Amount :</span> ₹ 2000.00</p>
            <p><span className="font-bold">Claimed Amount :</span> ₹ 2500.00</p>
        </div>
        <div className="text-right">
            <p><span className="font-bold">Amount :</span> ₹ 25,840.00</p>
            <p><span className="font-bold">Discount 5% :</span> ₹ 1,292.00</p>
            <p><span className="font-bold">Tax :</span> ₹ 120.00</p>
            <p><span className="font-bold">Total Amount :</span> ₹ 24,668.00</p>
        </div>
    </div>
    <div className="bg-blue-500 text-white p-4 rounded flex flex-col md:flex-row justify-between items-center">
        <p>Call : +90854 22354</p>
        <p>Email : Hello@Gmail.com</p>
    </div>
</div>
  )
}

export default PatientInvoice