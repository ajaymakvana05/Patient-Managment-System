const mongoose = require("mongoose")

const prescriptionSchema = new mongoose.Schema(
    {
        PatientID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: [true, "Patient ID is required"],
        },
        DoctorID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: [true, "Doctor ID is required"],
        },
        AppointmentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
            required: [true, "Appointment ID is required"],
        },
        medications: [
            {
                name: {
                    type: String,
                    required: [true, "Medication name is required"],
                },
                strengh: {
                    type: String,
                    required: [true, "strengh is required"],
                },
                dose: {
                    type: String,
                    required: [true, "Dosage is required"],
                },
                duration: {
                    type: String,
                    required: [true, "duration is required"],
                },
                WhenToTake: {
                    type: String,
                    enum: ["Before Food", "After Food", "With Food"]
                },
            },
        ],
        note: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true,
    }
);

const PrescriptionModel = mongoose.model("Prescription", prescriptionSchema);

module.exports = PrescriptionModel