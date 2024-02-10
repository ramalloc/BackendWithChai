import mongoose from "mongoose";

const workingHrsInHospitals = new mongoose.Schema(
    {
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        },
        workingHrs: {
            type: Number,
            required: true
        }
    }
)

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            rquired: true
        },
        qualification: {
            type: String,
            required: true  
        },
        experience: {
            type: Number,
            required: true,
            default: 0
        },
        // Now we wan to define that doctor works in which hospital and how much hours therefore we define a mini model above.
        worksInHospitals: [workingHrsInHospitals]
    },
    {timestamps: true}
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
