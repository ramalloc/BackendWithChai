import mongoose from "mongoose";

const medical_recordSchema = new mongoose.Schema(
    {
        patientName: {
            type: String,
            required: true
        },
        diagonsedWith: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bloodGroup: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["M", "F", "Others"],
            required: true
        },
        admittedInHospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        }
    },
    {timestamps: true}
);

export const MedicalRecord = mongoose.model("MedicalRecord", medical_recordSchema);
