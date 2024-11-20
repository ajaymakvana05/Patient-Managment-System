import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight , FaMars} from "react-icons/fa";
import Patterns  from "../../assets/images/Patterns.svg"


import moment from "moment";




const PatientAppointmentSlot = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [patientIssue, setPatientIssue] = useState("");
  const [diseaseName, setDiseaseName] = useState("");
  const [errors, setErrors] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [currentDate, setCurrentDate] = useState(moment()); 
  const [countries, setCountries] = useState([]);




  const navigate = useNavigate();


  const getWeekDays = () => {
    const startOfWeek = currentDate.clone().startOf("week");
    return Array.from({ length: 7 }, (_, i) =>
      startOfWeek.clone().add(i, "days")
    );
  };

  const weekDays = getWeekDays();

  const mockSchedule = [
    {
      time: "08 AM",
      available: ["No Schedule", "No Schedule", "Available", "No Schedule", "Not Available", "Available", "No Schedule"],
    },
    {
      time: "09 AM",
      available: ["Not Available", "Available", "No Schedule", "No Schedule", "Available", "No Schedule", "Not Available"],
    },
    {
      time: "10 AM",
      available: ["No Schedule", "No Schedule", "No Schedule", "Available", "Not Available", "Available", "No Schedule"],
    },
    {
      time: "11 AM",
      available: ["Available", "No Schedule", "No Schedule", "No Schedule", "Available", "Not Available", "Available"],
    },
    {
      time: "12 PM",
      available: ["No Schedule", "Available", "No Schedule", "No Schedule", "Not Available", "No Schedule", "No Schedule"],
    },
    {
      time: "01 PM",
      available: ["Lunch Time"],
    },
    {
      time: "02 PM",
      available: ["Lunch Time"],
      
    },
    {
      time: "03 PM",
      available: ["No Schedule", "Available", "No Schedule", "Available", "No Schedule", "No Schedule", "Not Available"],
    },
  ];
  const handlePrevious = () => setCurrentDate(currentDate.clone().subtract(1, "week"));
  const handleNext = () => setCurrentDate(currentDate.clone().add(1, "week"));

  const validateForm = () => {
    const newErrors = {};
    if (!patientIssue) {
      newErrors.patientIssue = "Patient Issue is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const fetchDoctorsAndHospitals = async () => {
      try {
        const doctorResponse = await fetch("http://localhost:8090/Appointment/alldoctor", {
          credentials: 'include',
        });
        const doctorData = await doctorResponse.json();
        setDoctors(doctorData);
        const uniqueHospitals = [...new Set(doctorData.map(doc => doc.HospitalName))];
        setHospitals(uniqueHospitals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDoctorsAndHospitals();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/appointmentbooking/patientaappointmentbookinginvoice");
    }
  };

  const filteredDoctors = doctors.filter(doctor => doctor.HospitalName === selectedHospital);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className=" mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 md:mb-6">Appointment Booking</h1>
       
        <div >
        <div className="col-span-2">
      <div className="bg-greyLightestLightest rounded-lg shadow-lg p-4">
        {/* Calendar Navigation */}
        <div className="flex justify-center items-center mb-6 ">
          <button
            onClick={handlePrevious}
            className="flex items-center text-blue  font-medium hover:underline focus:outline-none"
          >
            <FaChevronLeft className="mr-2" />
            
          </button>
          <h3 className="text-lg font-semibold text-gray-700">
            {weekDays[0].format("DD MMM, YYYY")} - {weekDays[6].format("DD MMM, YYYY")}
          </h3>
          <button
            onClick={handleNext}
            className="flex items-center text-blue  font-medium hover:underline focus:outline-none"
          >
          
            <FaChevronRight className="ml-2" />
          </button>
        </div>

        {/* Calendar Table */}
        <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-2">Time</th>
          {weekDays.map((day, index) => (
            <th key={index} className="py-2">
              {day.format("ddd DD")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {mockSchedule.map((slot, index) => (
    <tr key={index}>
      <td className="py-2 text-blue">{slot.time}</td>
      {slot.available.map((status, i) => (
        <td
          key={i}
          className={`py-2 ${
            status === "Not Available"
              ? "bg-greyLightest text-greyDark"
              : status === "No Schedule"
              ? "bg-white text-gray-400"
              : status === "Lunch Break"
              ? "bg-yellow text-black font-semibold"
              : status === "Available"
              ? "bg-blue text-black h-24"
              : ""
          }`}
        >
          {status === "Available" ? (
            <span
              className="bg-blue text-white px-2 py-1 rounded-md cursor-pointer hover:bg-blue-600"
              onClick={() => {
                setSelectedTime(slot.time);
                setAppointmentDate(weekDays[i].format("ddd DD MMM")); 
                setShowPopup(true); 
              }}
            >
              {status}
            </span>
          ) : (
            status
          )}
        </td>
      ))}
    </tr>
  ))}
  </tbody>
    </table>
      </div>
    </div>
   
        </div>
      </div>
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Appointment</h2>
      <div className="mb-4 flex justify-between">
        <label className="block text-gray-700">Appointment Type</label>
        <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-sm font-semibold">
          Online
        </span>
      </div>
      <div className="mb-4 flex justify-between">
        <label className="block text-gray-700">Patient Name</label>
        <p>John Doe</p>
      </div>
      <div className="mb-4 flex justify-between">
        <label className="block text-gray-700">Appointment Date</label>
        <p>{appointmentDate}</p>
      </div>
      <div className="mb-4 flex justify-between">
        <label className="block text-gray-700">Appointment Time</label>
        <p>{selectedTime}</p>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-4 relative">
          <input
            type="text"
            id="patient-issue"
            value={patientIssue}
            onChange={(e) => setPatientIssue(e.target.value)}
            className="peer border border-gray-300 rounded p-2 w-full placeholder-transparent focus:outline-none focus:border-blue-500"
            placeholder="Enter Patient Issue"
          />
          <label
            htmlFor="patient-issue"
            className="absolute left-2 -top-2.5 text-gray-600 text-sm bg-white px-1 transition-all peer-focus:text-sm"
          >
            Patient Issue
          </label>
          {errors.patientIssue && (
            <p className="text-red-600 text-sm">{errors.patientIssue}</p>
          )}
        </div>

        <div className="mb-4 relative">
          <input
            type="text"
            id="disease-name"
            value={diseaseName}
            onChange={(e) => setDiseaseName(e.target.value)}
            className="peer border border-gray-300 rounded p-2 w-full placeholder-transparent focus:outline-none focus:border-blue-500"
            placeholder="Enter Disease Name"
          />
          <label
            htmlFor="disease-name"
            className="absolute left-2 -top-2.5 text-gray-600 text-sm bg-white px-1 transition-all peer-focus:text-sm"
          >
            Disease Name <span className="text-gray-500">(Optional)</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 rounded px-4 py-2 mr-2"
            onClick={() => setShowPopup(false)} // Close popup
          >
            Cancel
          </button>
          <button type="submit" className="bg-blue text-white rounded px-4 py-2">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default PatientAppointmentSlot;