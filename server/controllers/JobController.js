import jobModel from "../models/Job.js";
import userModel from "../models/User.js";

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
        const {role, company, location, field, minSalary, maxSalary, description, tags, openings, experience, employmentType, requirements} = req.body;
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
            postedAt: Date.now(),
            requirements
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

const deleteAllJobs = async(req, res) => {
    try{
        await jobModel.deleteMany({});
        return res.status(200).json({message: "Jobs deleted"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const saveJob = async(req, res) => {
    try{
        const {jobID, userID} = req.body;
        const result = await userModel.findByIdAndUpdate(userID, {
            $push: {
                savedJobs: jobID
            }
        })
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const removeSavedJob = async(req, res) => {
    try{
        const {jobID, userID} = req.body;
        const result = await userModel.findByIdAndUpdate(userID, {
            $pull: {
                savedJobs: jobID
            }
        })
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getSavedJobs = async(req, res) => {
    const {userID} = req.params;
    const user = await userModel.findById(userID);
    const jobIDs = user?.savedJobs;

    let savedJobs = [];
    for (const jobID of jobIDs){
        let job = await jobModel.findById(jobID);
        savedJobs.push(job);
    }
    return res.status(200).json(savedJobs);
}

export default {getAllJobs, addJob, deleteJob, deleteAllJobs, saveJob, removeSavedJob, getSavedJobs}