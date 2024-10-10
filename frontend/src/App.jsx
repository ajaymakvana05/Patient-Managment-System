// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import NotFoundPage from "./Components/NotFoundPage";

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
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
            <Route path="/getotp" element={<ProtectedRoute><GetOTP /></ProtectedRoute>} />
            <Route path="/adminregistration" element={<ProtectedRoute><AdminRegistration /></ProtectedRoute>} />
            <Route path="/changepassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />


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
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
