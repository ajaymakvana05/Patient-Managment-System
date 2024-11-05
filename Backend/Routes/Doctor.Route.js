const { Router } = require("express")
const { login, resetpassword, DoctorProfile, DoctorUpdate, PatientRecord, SinglePatient, AppointmentRecord } = require("../Controllers/Doctor.Controller")
const { DoctorAuth } = require("../Middlewares/auth")
const DoctorRoute = Router()

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

DoctorRoute.post("/doctorlogin", login)

//reset password , change password
DoctorRoute.patch("/resetpassword", DoctorAuth, resetpassword)


// doctor profile
DoctorRoute.get("/profile", DoctorAuth, DoctorProfile)
DoctorRoute.patch("/update/:id", DoctorAuth, upload.single("image"), DoctorUpdate)


//Appointment Record
DoctorRoute.get("/AppointmentRecord", DoctorAuth, AppointmentRecord)

//Patient Record
DoctorRoute.get("/PatientRecord", DoctorAuth, PatientRecord)
// single patient details
DoctorRoute.get("/SinglePatient/:id", DoctorAuth, SinglePatient);




module.exports = DoctorRoute