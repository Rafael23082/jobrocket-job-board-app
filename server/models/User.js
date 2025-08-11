import mongoose, { mongo } from "mongoose";

const schemaOptions = {
    discriminatorKey: "role",
    collection: "users"
}

const userSchema = new mongoose.Schema({
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
    }
}, schemaOptions)

export const User = mongoose.model("User", userSchema);

const candidateSchema = new mongoose.Schema({
    savedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "job"
    }]
})

export const Candidate = User.discriminator("Candidate", candidateSchema);