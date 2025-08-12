import mongoose, { mongo } from "mongoose";

const applicationSchema = mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "job",
        required: true
    }, 
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    status: {
        type: String, 
        required: true,
        enum: ["pending", "reviewed", "interview", "accepted", "rejected"],
        default: "pending"
    }
})

const Application = mongoose.model("Application", applicationSchema);

export default Application;