import Application from "../models/Application.js";
import {User} from "../models/User.js";

const applyJob = async(req, res) => {
    try{
        const {userID, jobID} = req.body;
        const result = await Application.create({
            userID,
            jobID
        })
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteApplicationByID = async(req, res) => {
    try{
        const {applicationID} = req.params;
        await Application.findByIdAndDelete(applicationID);
        return res.status(200).json({message: "Application deleted!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getAllApplications = async(req, res) => {
    try{
        const results = await Application.find({});
        return res.status(200).json(results);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getApplicationByUserIDAndJobID = async(req, res) => {
    try{
        const {userID, jobID} = req.params;
        const application = await Application.findOne({
            userID,
            jobID
        })
        return res.status(200).json(application);
    }catch(err){
        return res.status(200).json({message: err.message});
    }
}

const deleteAllApplications = async(req, res) => {
    try{
        await Application.deleteMany({});
        return res.status(200).json({message: "Applications deleted!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const getPendingJobApplicants = async(req, res) => {
    try{
        const {jobID} = req.params;
        const applicants = await Application.find({jobID: jobID, status: "pending"})

        let applicantsArr = [];
        for (let i = 0; i < applicants.length; i ++){
            let applicantID = applicants[i].userID;
            let applicant = await User.findById(applicantID);
            applicantsArr.push(applicant);
        }
        return res.status(200).json(applicantsArr);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

export default {applyJob, deleteApplicationByID, getAllApplications, getApplicationByUserIDAndJobID, deleteAllApplications, getPendingJobApplicants};