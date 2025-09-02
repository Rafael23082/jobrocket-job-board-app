import bcrypt from "bcrypt";
import { Recruiter, User } from "../models/User.js";
import { Candidate } from "../models/User.js";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "./authController.js";

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
            maxAge: 15 * 60 * 1000
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
            maxAge: 15 * 60 * 1000
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
            
            const newAccessToken = generateAccessToken(payload);
            const newRefreshToken = generateRefreshToken(payload);

            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: true, /** secure: true if in production (false only for development only) */
                sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
                maxAge: 15 * 60     * 1000
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
        return res.status(500).json(err);
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
        res.clearCookie("accessToken", {
            secure: true,
            sameSite: "none",
            httpOnly: true,
            path: "/"
        })

        res.clearCookie("refreshToken", {
            secure: true,
            sameSite: "none",
            httpOnly: true,
            path: "/"
        })

        res.status(200).json("Logout successful!");
    }catch(err){
        return res.status(500).json(err.message);
    }
}

export default {getAllUsers, deleteAllUsers, signup, login, updateUserDetails, logout, autoLogin};