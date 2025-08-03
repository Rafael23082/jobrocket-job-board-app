import jobModel from "../models/Job.js";

const getAllJobs = async(req, res) => {
    try{
        const jobs = await jobModel.find({});
        return res.status(200).json(jobs);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const addJob = async(req, res) => {
    try{
        const {role, company, location, field, minSalary, maxSalary, description, tags, openings, experience, employmentType} = req.body;
        const newJob = await jobModel.create({
            role,
            company,
            location,
            field,
            salary: {
                min: minSalary,
                max: maxSalary
            },
            description, 
            tags,
            openings,
            experience, 
            employmentType,
            postedAt: Date.now()
        })
        res.status(200).json({message: "Job Added!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteJob = async(req, res) => {
    try{
        const {jobID} = req.params;
        await jobModel.findByIdAndDelete(jobID);
        return res.status(200).json({message: "Job deleted!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

export default {getAllJobs, addJob, deleteJob}