const mongoose = require("mongoose")
const AdminSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    hospital: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hospital" }],
    password: { type: String, require: true },
    confirmpassword: { type: String, require: true },
    imageUrl: { type: String, required: false }, 
}, { timestamps: true })

const AdmintModel = mongoose.model("Admin", AdminSchema)
module.exports = AdmintModel