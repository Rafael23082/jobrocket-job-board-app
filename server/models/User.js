import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    role: {
        type: String,
        enum: ["Candidate", "Recruiter", "Admin"],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "job"
    }]
})

const userModel = mongoose.model("user", userSchema);

export default userModel;