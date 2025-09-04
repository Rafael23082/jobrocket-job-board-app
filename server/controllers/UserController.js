import bcrypt from "bcrypt";
import { Recruiter, User } from "../models/User.js";
import { Candidate } from "../models/User.js";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "./authController.js";
import Application from "../models/Application.js";
import Job from "../models/Job.js";

const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({});
        return res.status(200).json(users);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteAllUsers = async(req, res) => {
    try{
        await User.deleteMany({});
        return res.status(200).json({message: "Users deleted!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const signup = async(req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const user = await User.findOne({
            email: email
        })
        if (user){
            return res.status(409).json({message: "Email is already in use."})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        let userCreated;
        if (role.toLowerCase() == "candidate"){
            userCreated = await Candidate.create({
                role,
                name,
                email,
                password: hashedPassword,
                savedJobs: []
            })
        }
        else if (role.toLowerCase() == "recruiter"){
            userCreated = await Recruiter.create({
                role,
                name,
                email,
                password: hashedPassword
            })
        }

        let payload = {
            id: userCreated._id,
            role: role
        }
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false, /** secure: true if in production (false only for development only) */
            sameSite: "none", /** sameSite: strict if in production (lax only for development only) (due to backend and frontend and backend running in different origin) */
            maxAge: 15 * 60 * 1000 /** 15 * 60 * 1000 */
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false, /** secure: true if in production (false only for development only) */
            sameSite: "none", /** sameSite: strict if in production (lax only for development only) (due to backend and frontend and backend running in different origin) */
            maxAge: 7 * 24 * 60 * 1000
        })

        return res.status(200).json({ user: userCreated });
    }catch(err){ 
        return res.status(500).json({message: err.message});
    }
}

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({
            email
        })
        if (!user){
            return res.status(404).json({message: "User not found!"});
        }
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword){
            return res.status(401).json({message: "Invalid credentials"});
        }

        let payload = {
            id: user._id,
            role: user.role
        }
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true, /** secure: true if in production (false only for development only) */
            sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
            maxAge: 15 * 60 * 1000 /** 15 * 60 * 1000 */
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true, /** secure: true if in production (false only for development only) */
            sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({user: user});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const autoLogin = async(req, res) => {
    try{
        const accessToken = req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;

        if (accessToken && refreshToken){
            const payload = jwt.verify(accessToken, "mySecretKey");
            jwt.verify(refreshToken, "myRefreshSecretKey");
            const user = await User.findById(payload.id);
            return res.status(200).json(user);
        }

        if (!accessToken && refreshToken){
            const payload = jwt.verify(refreshToken, "myRefreshSecretKey");
            const user = await User.findById(payload.id);
            
            const newPayload = {
                id: payload.id,
                role: payload.role
            }

            const newAccessToken = generateAccessToken(newPayload);
            const newRefreshToken = generateRefreshToken(newPayload);

            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: true, /** secure: true if in production (false only for development only) */
                sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
                maxAge: 15 * 60 * 1000 /** 15 * 60 * 1000 */
            })

            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: true, /** secure: true if in production (false only for development only) */
                sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
                maxAge: 7 * 24 * 60 * 60 * 1000
            })

            return res.status(200).json(user);
        }

        if (!accessToken && !refreshToken) {
            return res.status(401).json("No tokens provided. Please log in.");
        }
    }catch(err){
        return res.status(500).json(err.message);
    }
}

const updateUserDetails = async(req, res) => {
    try{
        const {userID} = req.params;
        let result;

        const user = await User.findById(userID);
        if (user.role == "Candidate"){
            result = await Candidate.findByIdAndUpdate(userID, req.body, {new: true});
        }else{
            result = await Recruiter.findByIdAndUpdate(userID, req.body, {new: true});
        }
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const logout = async(req, res) => {
    try{
        res.clearCookie("accessToken")
        res.clearCookie("refreshToken")

        res.status(200).json("Logout successful!");
    }catch(err){
        return res.status(500).json(err.message);
    }
}

const deleteUserByID = async(req, res) => {
    try{
        const {userID} = req.params;
        await User.findByIdAndDelete(userID);
        return res.status(200).json("User successfully deleted!");
    }catch(err){
        return res.status(500).json(err.message);
    }
}

const fetchCandidateDashboardData = async(req, res) => {
    try{
        const {userID} = req.params;
        const applicationCount = await Application.countDocuments({
            userID: userID
        })

        const user = await Candidate.findById(userID);
        const userObject = user.toObject();

        let fieldCount = 0;
        const profileFields = ["name", "email", "location", "additionalInformation", "resumeName"];
        profileFields.forEach((field) => {
            if (userObject[field]){
                fieldCount += 1
            }
        })

        let profileProgressPercentage = String((fieldCount / 5) * 100) + "%"

        let savedJobList = [];
        for (const jobID of user.savedJobs){
            const job = await Job.findById(jobID);
            savedJobList.push(job);
        }

        let jobsCategoryDict = {};
        savedJobList.forEach((job) => {
            if (!jobsCategoryDict[job.field]){
                jobsCategoryDict[job.field] = 1;
            }
            else{
                jobsCategoryDict[job.field] += 1
            }
        })

        let jobCategoryData = [];
        for (const key in jobsCategoryDict){
            jobCategoryData.push({
                name: key,
                value: jobsCategoryDict[key]
            });
        }

        let appliedJobList = await Application.find({userID: userID});
        let applicationStatusDict = {};
        for (const application of appliedJobList){
            if (!applicationStatusDict[application.status]){
                applicationStatusDict[application.status] = 1
            }else{
                applicationStatusDict[application.status] += 1
            }
        }

        let applicationStatusData = [];
        for (const key in applicationStatusDict){
            applicationStatusData.push({
                name: key.charAt(0).toUpperCase() + key.slice(1),
                value: applicationStatusDict[key]
            });
        }

        let applicationDateRanges = {};
        let year = new Date().getFullYear();
        let month = new Date().getMonth();

        for (let i = 0; i < 4; i ++){
            let applicationCount = await Application.countDocuments({
                userID: user._id,
                postedAt: {
                    $gte: new Date(year, month, 1, 0, 0, 0),
                    $lte: new Date(year, month + 1, 0, 23, 59, 59)
                }
            });
            applicationDateRanges[`${month + 1}-${year}`] = applicationCount

            month -= 1;
            if (month == 0){
                month = 11;
                year -= 1;
            }
        }

        const applicationOvertimeData = Object.entries(applicationDateRanges).map(([key, value]) => ({
            name: key,
            Applications: value
        })).reverse();

        return res.status(200).json({
            applicationCount: applicationCount,
            savedJobsCount: user.savedJobs.length,
            profileProgress: profileProgressPercentage,
            jobCategoryData: jobCategoryData,
            applicationStatusData: applicationStatusData,
            applicationOvertimeData: applicationOvertimeData
        })
    }catch(err){
        return res.status(500).json(err.message);
    }
}

const fetchRecruiterDashboardData = async(req, res) => {
    try{
        const {userID} = req.params;

        const jobsPosted = await Job.find({
            postedBy: userID
        })

        const jobIDs = jobsPosted.map((job) => job._id);
        const totalApplicants = await Application.countDocuments({
            jobID: { $in: jobIDs }
        });

        const applicantsPerJob = (totalApplicants / jobsPosted.length).toFixed(2);
        
        let applicantsDateRanges = {};
        let year = new Date().getFullYear();
        let month = new Date().getMonth();

        for (let i = 0; i < 4; i ++){
            let applicantsCount = await Application.countDocuments({
                jobID: { $in: jobIDs },
                postedAt: {
                    $gte: new Date(year, month, 1, 0, 0, 0),
                    $lte: new Date(year, month + 1, 0, 23, 59, 59)
                }
            });
            applicantsDateRanges[`${month + 1}-${year}`] = applicantsCount

            month -= 1;
            if (month == 0){
                month = 11;
                year -= 1;
            }
        }

        const applicationOvertimeData = Object.entries(applicantsDateRanges).map(([key, value]) => ({
            name: key,
            Applicants: value
        })).reverse();

        const applications = await Application.find({
            jobID: { $in: jobIDs }
        });

        let applicantsStatusDict = {};
        applications.forEach((application) => {
            if (!applicantsStatusDict[application.status]){
                applicantsStatusDict[application.status] = 1;
            }
            else{
                applicantsStatusDict[application.status] += 1
            }
        })

        let applicantsStatusData = [];
        for (const key in applicantsStatusDict){
            applicantsStatusData.push({
                name: key,
                value: applicantsStatusDict[key]
            });
        }

        let jobsCategoryDict = {};
        jobsPosted.forEach((job) => {
            if (!jobsCategoryDict[job.field]){
                jobsCategoryDict[job.field] = 1;
            }
            else{
                jobsCategoryDict[job.field] += 1
            }
        })

        let jobCategoryData = [];
        for (const key in jobsCategoryDict){
            jobCategoryData.push({
                name: key,
                value: jobsCategoryDict[key]
            });
        }

        return res.status(200).json({
            jobPostedCount: jobsPosted.length,
            totalApplicants: totalApplicants,
            applicantsPerJob: applicantsPerJob,
            applicationOvertimeData: applicationOvertimeData,
            applicantsStatusData: applicantsStatusData,
            jobCategoryData: jobCategoryData
        })
    }catch(err){
        return res.status(500).json(err.message);
    }
}

export default {getAllUsers, deleteAllUsers, signup, login, updateUserDetails, logout, autoLogin, deleteUserByID, fetchCandidateDashboardData, fetchRecruiterDashboardData};