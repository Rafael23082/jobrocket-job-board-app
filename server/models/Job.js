import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true,
        enum: ["Tech", "Design", "Data", "Business", "Marketing"]
    },
    salary: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    experience: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Internship"]
    },
    postedAt: {
        type: Date,
        required: true
    },
    openings: {
        type: Number,
        required: true
    },
    requirements: [{
        type: String,
        required: true
    }],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const Job = mongoose.model("Job", jobSchema);

export default Job;