import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./Components/MainSection";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import GetOTP from "./Components/GetOTP";
import AdminRegistration from "./pages/admin/adminRegistration";
import ProfileDashboard from "./pages/admin/ProfileDashboard";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "./Components/ChangePassword";
import EditProfileForm from "./Components/EditProfileForm";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import DoctorDashboard from "./pages/admin/DoctorDashboard";
import PatientDashboard from "./pages/admin/PatientDashboard";
import BillingDashboard from "./pages/admin/BillingDashboard";
import ReportingDashboard from "./pages/admin/ReportingDashboard";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import MonitorBilling from "./pages/admin/MonitorBilling";
import InsuranceClaims from "./pages/admin/InsuranceClaims";
import PaymentProcess from "./pages/admin/PaymentProcess";
import CreateBills from "./Components/Invoice";
import DoctorTable from "./Components/DoctorTable";
import Invoice from "./Components/Invoice";
import CreateBillForm from "./Components/CreateBillForm";
import AddDoctorForm from "./Components/AddDoctorForm";
import ChangeInvoiceForm from "./Components/ChangeInvoiceForm";
import InvoiceComponent from "./Components/InvoiceComponent";
import EditBillsform from "./Components/EditBillsform";
import DoctorLogin from "./Components/DoctorPanel/DoctorLogin";
import DoctorForgetPassword from "./Components/DoctorPanel/DoctorForgetPassword";
import DoctorOtp from "./Components/DoctorPanel/DoctorOtp";
import DoctorResetPassword from "./Components/DoctorPanel/DoctorResetPassword";
import DoctorHeader from "./Components/DoctorPanel/DoctorHeader";
import AppointmentManagement from "./pages/doctor/AppointmentManagement";
import DoctorProfileDashboard from "./pages/doctor/DoctorProfileDashboard";
import DoctorProfile from "./Components/DoctorPanel/DoctorProfile";
import DoctorChangePassword from "./Components/DoctorPanel/DoctorChangePassword";
import DoctorTermsAndConditions from "./Components/DoctorPanel/DoctorTermsAndConditions";
import DoctorPrivacyPolicy from "./Components/DoctorPanel/DoctorPrivacyPolicy";
import AppointmentTimeSlot from "./Components/DoctorPanel/AppointmentTimeSlot";
import AppointmentTable from "./Components/DoctorPanel/AppointmentTable";
import PatientRecordAccess from "./pages/doctor/PatientRecordAccess";
import DoctorPatientRecordAccessTable from "./Components/DoctorPanel/DoctorPatientRecordAccessTable";
import DoctorPatientDetails from "./Components/DoctorPanel/DoctorPatientDetails";
import PrescriptionTools from "./pages/doctor/PrescriptionTools";
import Appointments from "./Components/DoctorPanel/Appointments";
import UodateDoctorForm from "./Components/updateDoctorForm";
import PatientDetails from "./Components/DoctorPanel/PatientDetails";
import CreatePrescription from "./Components/DoctorPanel/CreatePrescription";
import DoctorProtect from "./Components/DoctorPanel/DoctorProtected";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="main-layout">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
          />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route path="/getotp" element={<GetOTP />} />
            <Route path="/adminregistration" element={<AdminRegistration />} />
            <Route path="/changepassword" element={<ChangePassword />} />

            {/* Secure Profile Dashboard */}
            <Route
              path="/profiledashboard"
              element={
                <ProtectedRoute>
                  <ProfileDashboard />
                </ProtectedRoute>
              }
            >
              <Route
                index
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="changepassword"
                element={
                  <ProtectedRoute>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="editprofileform"
                element={
                  <ProtectedRoute>
                    <EditProfileForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="termsandconditions"
                element={
                  <ProtectedRoute>
                    <TermsAndConditions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="privacypolicy"
                element={
                  <ProtectedRoute>
                    <PrivacyPolicy />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Secure Dashboard Routes */}

            {/* /dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctordashboard"
              element={
                <ProtectedRoute>
                  <DoctorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patientdashboard"
              element={
                <ProtectedRoute>
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />

            {/* billingdashboard */}
            <Route
              path="/billingdashboard"
              element={
                <ProtectedRoute>
                  <BillingDashboard />
                </ProtectedRoute>
              }
            >
              <Route index path="monitorbilling" element={<MonitorBilling />} />
              <Route path="insuranceclaims" element={<InsuranceClaims />} />
              <Route path="paymentprocess" element={<PaymentProcess />} />
              <Route path="changennvoiceform" element={<ChangeInvoiceForm />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="editbillsform" element={<EditBillsform />} />
              <Route path="invoicecomponent" element={<InvoiceComponent />} />
            </Route>

            <Route
              path="/reportingdashboard"
              element={
                <ProtectedRoute>
                  <ReportingDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/createbillForm"
              element={
                <ProtectedRoute>
                  <CreateBillForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/UodateDoctorForm/:id"
              element={
                <ProtectedRoute>
                  <UodateDoctorForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adddoctorform"
              element={
                <ProtectedRoute>
                  <AddDoctorForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctortable"
              element={
                <ProtectedRoute>
                  <DoctorTable />
                </ProtectedRoute>
              }
            />

            {/* Doctor route */}
            <Route
              path="doctor/doctorlogin"
              element={
                <DoctorProtect>
                  <DoctorLogin />
                </DoctorProtect>
              }
            />
            <Route
              path="/doctorforgetpassword"
              element={
                <DoctorProtect>
                  <DoctorForgetPassword />
                </DoctorProtect>
              }
            />
            <Route
              path="/doctorgetotp"
              element={
                <DoctorProtect>
                  <DoctorOtp />
                </DoctorProtect>
              }
            />
            <Route
              path="/doctorresetpassword"
              element={
                <DoctorProtect>
                  <DoctorResetPassword />
                </DoctorProtect>
              }
            />
            <Route
              path="/appointmentmanagement"
              element={
                <DoctorProtect>
                  <AppointmentManagement />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="appointmenttable"
                element={
                  <DoctorProtect>
                    <AppointmentTable />
                  </DoctorProtect>
                }
              />
              <Route
                path="appointmenttimeslot"
                element={
                  <DoctorProtect>
                    <AppointmentTimeSlot />
                  </DoctorProtect>
                }
              />
            </Route>

            <Route
              path="/doctorprofiledashboard"
              element={
                <DoctorProtect>
                  <DoctorProfileDashboard />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="doctorprofile"
                element={
                  <DoctorProtect>
                    <DoctorProfile />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorchangepassword"
                element={
                  <DoctorProtect>
                    <DoctorChangePassword />
                  </DoctorProtect>
                }
              />
              <Route
                path="editprofileform"
                element={
                  <DoctorProtect>
                    <EditProfileForm />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorTermsandconditions"
                element={
                  <DoctorProtect>
                    <DoctorTermsAndConditions />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorprivacypolicy"
                element={
                  <DoctorProtect>
                    <DoctorPrivacyPolicy />
                  </DoctorProtect>
                }
              />
            </Route>
            {/* patientrecordaccess */}
            <Route
              path="/patientrecordaccess"
              element={
                <DoctorProtect>
                  <PatientRecordAccess />
                </DoctorProtect>
              }
            >
              <Route
                index
                path="doctorpatientrecordaccessTable"
                element={
                  <DoctorProtect>
                    <DoctorPatientRecordAccessTable />
                  </DoctorProtect>
                }
              />
              <Route
                path="doctorpatientdetails"
                element={
                  <DoctorProtect>
                    <DoctorPatientDetails />
                  </DoctorProtect>
                }
              />
            </Route>

            {/* PrescriptionTools */}

            <Route
              path="/prescriptiontools"
              element={
                <DoctorProtect>
                  <PrescriptionTools />
                </DoctorProtect>
              }
            >
              <Route
                path="appointments"
                element={
                  <DoctorProtect>
                    <Appointments />
                  </DoctorProtect>
                }
              />
              <Route
                path="patientdetails"
                element={
                  <DoctorProtect>
                    <PatientDetails />
                  </DoctorProtect>
                }
              />
              <Route
                path="createprescription"
                element={
                  <DoctorProtect>
                    <CreatePrescription />
                  </DoctorProtect>
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
