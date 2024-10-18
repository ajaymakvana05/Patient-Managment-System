import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 5,
      date: "3 Jan, 2022",
      title: "Prescription 1",
      imageUrl: "https://via.placeholder.com/300x400?text=Prescription+1",
    },
    {
      id: 6,
      date: "4 Jan, 2022",
      title: "Prescription 2",
      imageUrl: "https://via.placeholder.com/300x400?text=Prescription+2",
    },
  ]);
  const navigate = useNavigate();

  const [newPrescription, setNewPrescription] = useState({
    title: "",
    date: "",
    imageUrl: "",
  });
  const [showForm, setShowForm] = useState(false);

  const patient = {
    name: "Marcus Philips",
    number: "99130-94357",
    issue: "Feeling tired",
    gender: "Male",
    doctor: "Dr. Marcus Philips",
    age: 26,
    appointmentType: "Online",
    address: "B-40 Sasaki st., Indra vacato...",
    lastAppointmentDate: "2 Jan, 2022",
    lastAppointmentTime: "4:30 PM",
  };

  const allDocuments = [
    {
      id: 1,
      date: "2 Jan, 2022",
      title: "Medical Certificate",
      imageUrl:
        "https://via.placeholder.com/300x400?text=Medical+Certificate+1",
    },
    {
      id: 2,
      date: "2 Jan, 2022",
      title: "Medical Certificate",
      imageUrl:
        "https://via.placeholder.com/300x400?text=Medical+Certificate+2",
    },
    {
      id: 3,
      date: "2 Jan, 2022",
      title: "Medical Certificate",
      imageUrl:
        "https://via.placeholder.com/300x400?text=Medical+Certificate+3",
    },
    {
      id: 4,
      date: "2 Jan, 2022",
      title: "Medical Certificate",
      imageUrl:
        "https://via.placeholder.com/300x400?text=Medical+Certificate+4",
    },
  ];

  const diagnoses = [
    {
      id: 7,
      date: "5 Jan, 2022",
      title: "Diagnosis 1",
      imageUrl: "https://via.placeholder.com/300x400?text=Diagnosis+1",
    },
    {
      id: 8,
      date: "6 Jan, 2022",
      title: "Diagnosis 2",
      imageUrl: "https://via.placeholder.com/300x400?text=Diagnosis+2",
    },
  ];

  let documentsToDisplay;
  if (activeTab === "all") {
    documentsToDisplay = [...allDocuments, ...prescriptions, ...diagnoses];
  } else if (activeTab === "prescriptions") {
    documentsToDisplay = prescriptions;
  } else if (activeTab === "diagnoses") {
    documentsToDisplay = diagnoses;
  }

  const handleAddPrescription = (e) => {
    e.preventDefault();
    const newId = prescriptions.length + 1;
    const newDoc = {
      id: newId,
      date: newPrescription.date || "Unknown Date",
      title: newPrescription.title || `Prescription ${newId}`,
      imageUrl:
        newPrescription.imageUrl ||
        "https://via.placeholder.com/300x400?text=New+Prescription",
    };
    setPrescriptions([...prescriptions, newDoc]);
    setNewPrescription({ title: "", date: "", imageUrl: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Patient"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="grid grid-cols-5">
          <p className="semi-bold">
            Patient Name: <span>{patient.name}</span>
          </p>
          <p>Patient Number: {patient.number}</p>
          <p>Patient Issue: {patient.issue}</p>
          <p>Patient Gender: {patient.gender}</p>
          <p>Doctor Name: {patient.doctor}</p>
          <p>Patient Age: {patient.age} Years</p>
          <p>Appointment Type: {patient.appointmentType}</p>
          <p>Patient Address: {patient.address}</p>
          <p>Last Appointment Date: {patient.lastAppointmentDate}</p>
          <p>Last Appointment Time: {patient.lastAppointmentTime}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="mt-6 flex space-x-7 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("all")}
            className={`${
              activeTab === "all" ? "border-b-2 border-blue" : ""
            } py-2 px-4`}
          >
            All Documents
          </button>
          <button
            onClick={() => setActiveTab("prescriptions")}
            className={`${
              activeTab === "prescriptions" ? "border-b-2 border-blue" : ""
            } py-2 px-4`}
          >
            Prescriptions
          </button>
          <button
            onClick={() => setActiveTab("diagnoses")}
            className={`${
              activeTab === "diagnoses" ? "border-b-2 border-blue" : ""
            } py-2 px-4`}
          >
            Diagnoses
          </button>
        </div>
        {activeTab === "prescriptions" && (
          <div className="flex ">
            <button
              className="bg-blue text-white py-2 px-4  ml-auto rounded-lg"
              onClick={() => navigate("/prescriptiontools/createprescription")}
            >
              {showForm ? "Cancel" : "Create Prescription"}
            </button>
          </div>
        )}
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {documentsToDisplay.length > 0 ? (
          documentsToDisplay.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-4 shadow-lg rounded-lg border border-gray-200"
            >
              <h3 className="text-lg font-bold">{doc.title}</h3>
              <p className="text-sm text-gray-500">{doc.date}</p>
              <img src={doc.imageUrl} alt={doc.title} className="w-full mt-4" />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No documents available</p>
        )}
      </div>
    </div>
  );
};

export default PatientDetails;
