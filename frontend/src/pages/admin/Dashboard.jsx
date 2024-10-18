import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import StatisticsChart from "../../Components/StatisticsChart";
import BillingPayments from "../../Components/BillingPayments";
import { FaUserInjured, FaUserMd, FaCalendarCheck } from "react-icons/fa"; // Importing icons
import PatientsSummary from "../../Components/PatientsSummary";
import AppointmentsList from "../../Components/AppointmentsList";

const Dashboard = () => {
  const patientData = [
    6000, 12000, 8000, 5000, 22000, 16000, 3476, 22000, 27000, 32000, 17000,
    6000,
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow w-1/2 ">
        <Header />
        <div className="overflow-x-auto">
          <div className="gap-4 grid md:grid-cols-3 p-4">
            {/* left */}
            <div className="md:col-span-2">
              {/* Dashboard Cards */}

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {/* Total Patients */}
                <div className="bg-white rounded-lg shadow-sm flex justify-between items-center min-h-[100px]">
                  <div className="flex items-center gap-2">
                    <FaUserInjured className="text-blue text-lg" />
                    <div className="md:grid">
                      <span>Total Patients</span>
                      <span className="font-bold">1500</span>
                    </div>
                  </div>
                </div>

                {/* Total Doctors */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center min-h-[100px]">
                  <div className="flex items-center gap-2">
                    <FaUserMd className="text-green-500 text-lg" />
                    <div className="md:grid">
                      <span>Total Doctors</span>
                      <span className="font-bold">500</span>
                    </div>
                  </div>
                </div>

                {/* Total Appointments */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center min-h-[100px]">
                  <div className="flex items-center gap-2">
                    <FaCalendarCheck className="text-purple-500 text-lg" />
                    <div className="md:grid">
                      <span>Total Appointments</span>
                      <span className="font-bold">1080</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patients Statistics with Graph */}
              <div className="grid">
                <StatisticsChart patientData={patientData} />
              </div>
            </div>

            {/* right */}
            <div className="grid min-h-full">
              {/* Billing & Payments */}
              <div className="bg-white p-4 rounded-lg shadow overflow-auto  ">
                <BillingPayments />
              </div>
            </div>
          </div>

          <div className="gap-2 grid md:grid-cols-3 overflow-x-auto p-4 ">
            <div className="md:col-span-2">
              {/* Today's Appointments List */}
              <div className="bg-white">
                <AppointmentsList />
              </div>
            </div>
            <div className="grid">
              {/* Patients Summary */}

              <PatientsSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
