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
        required: true,
        unique: true
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
    }],
    location: {
        type: String
    },
    additionalInformation: {
        type: String
    },
    resume: {
        type: String
    }
})

export const Candidate = User.discriminator("Candidate", candidateSchema);

const recruiterSchema = new mongoose.Schema({})

export const Recruiter = User.discriminator("Recruiter", recruiterSchema);