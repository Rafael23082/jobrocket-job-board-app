import Application from "../models/Application.js";
import Job from "../models/Job.js";
import { User } from "../models/User.js";
import { Candidate } from "../models/User.js";

const getAllJobs = async(req, res) => {
    try{
        const jobs = await Job.find({});
        return res.status(200).json(jobs);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const addJob = async(req, res) => {
    try{
        const {role, company, location, field, minSalary, maxSalary, description, tags, openings, experience, employmentType, requirements} = req.body;
        const newJob = await Job.create({
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

const addMultipleJobs = async(req, res) => {
    try{
        const {jobsArray} = req.body;
        const insertedJobs = await Job.insertMany(jobsArray, {ordered: false});
        return res.status(200).json(insertedJobs);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteJob = async(req, res) => {
    try{
        const {jobID} = req.params;
        await Job.findByIdAndDelete(jobID);
        return res.status(200).json({message: "Job deleted!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteAllJobs = async(req, res) => {
    try{
        await Job.deleteMany({});
        return res.status(200).json({message: "Jobs deleted"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const saveJob = async(req, res) => {
    try{
        const {jobID, userID} = req.body;
        const result = await Candidate.findByIdAndUpdate(userID, {
            $push: {
                savedJobs: jobID
            }
        }, {new: true})
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const removeSavedJob = async(req, res) => {
    try{
        const {jobID, userID} = req.body;
        const result = await Candidate.findByIdAndUpdate(userID, {
            $pull: {
                savedJobs: jobID
            }
        }, {new: true})
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getSavedJobs = async(req, res) => {
    const {userID} = req.params;
    const user = await Candidate.findById(userID);
    const jobIDs = user?.savedJobs;

    let savedJobs = [];
    for (const jobID of jobIDs){
        let job = await Job.findById(jobID);
        if (job){
            savedJobs.push(job);
        }
    }
    return res.status(200).json(savedJobs);
}

const getNotAppliedJobs = async(req, res) => {
    try{
        const {userID} = req.params;
        const result = await Job.find({
            _id: {$nin: await Application.distinct("jobID", {userID: userID})}
        })
        return res.status(200).json(result);
    }catch(err){
        return res.status(200).json({message: err.message});
    }
}

const getAppliedJobs = async(req, res) => {
    try{
        const {userID} = req.params;
        const jobIDList = await Application.distinct("jobID", {userID: userID});
        const jobs = await Job.find({
            _id: {$in: jobIDList}
        })
        return res.status(200).json(jobs);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getJobsPostedByRecruiter = async(req, res) => {
    try{
        const {userID} = req.params;
        const jobs = await Job.find({postedBy: userID});

        const jobIDs = jobs.map((job) => job._id)
        const applicationCount = await Application.aggregate([
            {
                $match: {
                    jobID: {$in: jobIDs}
                }
            }, 
            {
                $group: {
                    _id: "$jobID",
                    count: {$sum: 1}
                }
            }
        ])

        let applicationMap = {}
        applicationCount.forEach((application) => {
            applicationMap[application._id] = application.count;
        })

        const jobWithApplications = jobs.map((job) => ({
            ...job.toObject(),
            applications: applicationMap[job._id] || 0
        }))

        return res.status(200).json(jobWithApplications);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getJobByID = async(req, res) => {
    try{
        const {jobID} = req.params;
        const job = await Job.findById(jobID);
        return res.status(200).json(job);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

export default {getAllJobs, addJob, addMultipleJobs, deleteJob, deleteAllJobs, saveJob, removeSavedJob, getSavedJobs, getNotAppliedJobs, getAppliedJobs, getJobsPostedByRecruiter, getJobByID}