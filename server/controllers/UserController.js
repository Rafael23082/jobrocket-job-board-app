import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { Candidate } from "../models/User.js";

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
        return res.status(200).json(userCreated);
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
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const updateUserDetails = async(req, res) => {
    try{
        const {userID} = req.params;
        let result;

        const user = await User.findById(userID);
        if (user.role == "Candidate"){
            result = await Candidate.findByIdAndUpdate(userID, req.body, {new: true});
        }
        
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

export default {getAllUsers, deleteAllUsers, signup, login, updateUserDetails};