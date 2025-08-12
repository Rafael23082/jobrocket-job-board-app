import Application from "../models/Application.js";

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

export default {applyJob, deleteApplicationByID, getAllApplications}