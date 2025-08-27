import mongoose, { mongo } from "mongoose";

const applicationSchema = mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    }, 
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true
    },
    status: {
        type: String, 
        required: true,
        enum: ["pending", "interview", "rejected"],
        default: "pending"
    },
    postedAt: {
        type: Date,
        required: true,
        default: new Date()
    }
})

const Application = mongoose.model("Application", applicationSchema);

export default Application;