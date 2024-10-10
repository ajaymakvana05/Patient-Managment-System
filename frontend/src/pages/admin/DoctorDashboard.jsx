import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import DoctorManagementTable from "../../Components/DoctorManagementTable";

const DoctorDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full">
            <DoctorManagementTable/>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
