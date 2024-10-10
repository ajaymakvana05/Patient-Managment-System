import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { FaUserCircle } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";

const AddDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    doctorName: "",
    qualification: "",
    gender: "",
    specialtyType: "",
    workOn: "",
    workingTime: "",
    checkUpTime: "",
    breakTime: "",
    phoneNumber: "",
    experience: "",
    age: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    doctorAddress: "",
    description: "",
    onlineConsultationRate: "",
    currentHospital: "",
    hospitalName: "",
    hospitalAddress: "",
    hospitalWebsite: "",
    emergencyContact: "",
    photo: null,
    signature: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "photo") {
      setDoctorData((prevData) => ({ ...prevData, photo: file }));
      setPhotoPreview(URL.createObjectURL(file));
    } else if (name === "signature") {
      setDoctorData((prevData) => ({ ...prevData, signature: file }));
      setSignaturePreview(URL.createObjectURL(file));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data:", doctorData);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full">
          <div className="p-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 shadow-lg rounded-lg"
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="mb-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaUserCircle size={50} className="text-gray-400" />
                      )}
                    </div>
                    <label className="block mt-2 font-medium">
                      Choose Photo
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1  w-full border rounded-lg hidden"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
                      {signaturePreview ? (
                        <img
                          src={signaturePreview}
                          alt="Signature"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaSignature size={50} className="text-gray-400" />
                      )}
                    </div>
                    <label className="block mt-2 font-medium">
                      Upload Signature
                      <input
                        type="file"
                        name="signature"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1  w-full border rounded-lg hidden"
                      />
                    </label>
                </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6 flex-grow">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      name="doctorName"
                      value={doctorData.doctorName}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Doctor Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Doctor Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      value={doctorData.qualification}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Doctor Qualification"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={doctorData.gender}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={doctorData.experience}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Experience"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={doctorData.email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={doctorData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={doctorData.age}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Age"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={doctorData.country}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Country"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={doctorData.state}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter State"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={doctorData.city}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter City"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={doctorData.zipCode}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter ZIP Code"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Doctor Address
                    </label>
                    <input
                      type="text"
                      name="doctorAddress"
                      value={doctorData.doctorAddress}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Doctor Address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={doctorData.description}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Description"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Online Consultation Rate
                    </label>
                    <input
                      type="text"
                      name="onlineConsultationRate"
                      value={doctorData.onlineConsultationRate}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Online Consultation Rate"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Current Hospital
                    </label>
                    <input
                      type="text"
                      name="currentHospital"
                      value={doctorData.currentHospital}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Current Hospital"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Hospital Name
                    </label>
                    <input
                      type="text"
                      name="hospitalName"
                      value={doctorData.hospitalName}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Hospital Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Hospital Address
                    </label>
                    <input
                      type="text"
                      name="hospitalAddress"
                      value={doctorData.hospitalAddress}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Hospital Address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Hospital Website
                    </label>
                    <input
                      type="url"
                      name="hospitalWebsite"
                      value={doctorData.hospitalWebsite}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Hospital Website"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Emergency Contact
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={doctorData.emergencyContact}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Enter Emergency Contact"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorForm;
