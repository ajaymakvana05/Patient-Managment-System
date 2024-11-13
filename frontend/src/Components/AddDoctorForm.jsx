import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { toast } from 'react-toastify';
import { FaUserCircle } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";


import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    DoctorName: '',
    DoctorQualification: '',
    gender: '',
    specialtiyType: '',
    WorkOn: '',
    workingTime: '',
    CheckupTime: '',
    BreakTime: '',
    Experience: '',
    phoneNumber: '',
    age: '',
    DoctorEmail: '',
    country: '',
    state: '',
    city: '',
    ZipCode: '',
    DoctorAddress: '',
    Description: '',
    OnlineConsultationRate: '',
    DoctorCurrentHospital: '',
    HospitalName: '',
    HospitalAddress: '',
    HospitalWebsiteLink: '',
    EmergencyContactNumber: '',
    Password: '',
    DoctorImage: {},
    DoctorSignature: {},
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();




  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "DoctorImage") {
      setDoctorData((prevData) => ({ ...prevData, DoctorImage: file }));
      setPhotoPreview(URL.createObjectURL(file));
    } else if (name === "DoctorSignature") {
      setDoctorData((prevData) => ({ ...prevData, DoctorSignature: file }));
      setSignaturePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    Object.keys(doctorData).forEach((key) => {
      formData.append(key, doctorData[key]);
    });

    const token = localStorage.getItem('token');
    console.log("Token sent to server:", token);

    try {
      const response = await axios.post("http://localhost:8090/admin/adddoctor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Doctor added successfully!");
      navigate('/doctordashboard')
      console.log("Doctor added successfully:", response.data);
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Failed to add doctor. Please try again.";
      toast.error(errorMsg);
      console.error("Failed to add doctor:", errorMsg);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
              <div className="flex">
                <div className="mr-6">
                  <div className="mb-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
                      {photoPreview ? (
                        <img src={photoPreview} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <FaUserCircle size={50} className="text-gray-400" />
                      )}

                    </div>
                    <label className="block mt-2 font-medium">
                      Choose Photo
                      <input
                        type="file"
                        name="DoctorImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 w-full border rounded-lg hidden"
                        required
                      />
                    </label>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
                      {signaturePreview ? (
                        <img src={signaturePreview} alt="Signature" className="w-full h-full object-cover" />
                      ) : (
                        <FaSignature size={50} className="text-gray-400" />
                      )}
                    </div>
                    <label className="block mt-2 font-medium">
                      Upload Signature
                      <input
                        type="file"
                        name="DoctorSignature"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 w-full border rounded-lg hidden"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 flex-grow">
                  <div className="relative">
                    <input
                      type="text"
                      name="DoctorName"
                      value={doctorData.DoctorName}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none  placeholder:text-sm placeholder:text-grey placeholder:font-normal "
                      placeholder="Doctor name "
                      required
                    />
                    <label
                      className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4  scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue"
                    >
                      Doctor Name
                    </label>
                  </div>
                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue">Doctor Qualification</label>
                    <input
                      type="text"
                      name="DoctorQualification"
                      value={doctorData.DoctorQualification}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none  "
                      placeholder="Enter Doctor Qualification"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Gender</label>
                    <select
                      name="gender"
                      value={doctorData.gender}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm text-grey font-normal "
                      required
                    >
                      <option value="" className=" text-black ">Select Gender</option>
                      <option value="Male" className="text-black">Male</option>
                      <option value="Female" className="text-black">Female</option>
                      <option value="Other" className="text-black">Other</option>
                    </select>
                  </div>

                  <div className="relative ">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Specialty Type</label>
                    <input
                      type="text"
                      name="specialtiyType"
                      value={doctorData.specialtiyType}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Specialty Type"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Work On</label>
                    <input
                      type="text"
                      name="WorkOn"
                      value={doctorData.WorkOn}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Work On"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Working Time (HH:MM)</label>
                    <input
                      type="text"
                      name="workingTime"
                      value={doctorData.workingTime}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Working Time"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Checkup Time (HH:MM)</label>
                    <input
                      type="text"
                      name="CheckupTime"
                      value={doctorData.CheckupTime}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Checkup Time"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Break Time (HH:MM)</label>
                    <input
                      type="text"
                      name="BreakTime"
                      value={doctorData.BreakTime}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Break Time"
                      required

                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Experience</label>
                    <input
                      type="text"
                      name="Experience"
                      value={doctorData.Experience}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Experience"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={doctorData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={doctorData.age}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Age"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Doctor Email</label>
                    <input
                      type="email"
                      name="DoctorEmail"
                      value={doctorData.DoctorEmail}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Doctor Email"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={doctorData.country}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Country"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={doctorData.state}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter State"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={doctorData.city}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter City"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Zip Code</label>
                    <input
                      type="number"
                      name="ZipCode"
                      value={doctorData.ZipCode}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Zip Code"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Doctor Address</label>
                    <input
                      type="text"
                      name="DoctorAddress"
                      value={doctorData.DoctorAddress}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Doctor Address"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Description</label>
                    <input
                      name="Description"
                      value={doctorData.Description}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Description"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Online Consultation Rate</label>
                    <input
                      type="number"
                      name="OnlineConsultationRate"
                      value={doctorData.OnlineConsultationRate}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Rate"
                      required
                    />
                  </div>

                
                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Current Hospital</label>
                    <input
                      type="text"
                      name="DoctorCurrentHospital"
                      value={doctorData.DoctorCurrentHospital}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Current Hospital"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Hospital Name</label>
                    <input
                      type="text"
                      name="HospitalName"
                      value={doctorData.HospitalName}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Hospital Name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Hospital Address</label>
                    <input
                      type="text"
                      name="HospitalAddress"
                      value={doctorData.HospitalAddress}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Hospital Address"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Hospital Website Link</label>
                    <input
                      type="text"
                      name="HospitalWebsiteLink"
                      value={doctorData.HospitalWebsiteLink}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Website Link"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Emergency Contact Number</label>
                    <input
                      type="text"
                      name="EmergencyContactNumber"
                      value={doctorData.EmergencyContactNumber}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Emergency Contact Number"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-black font-medium duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2">Password</label>
                    <input
                      type="password"
                      name="Password"
                      value={doctorData.Password}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-sm placeholder:text-grey placeholder:font-normal outline-none "
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`bg-blue text-white px-6 py-2 rounded-lg ${loading ? "cursor-not-allowed" : "hover:bg-blue"}`}
                  disabled={loading}
                >
                  {loading ? "Adding Doctor..." : "Add Doctor"}
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
