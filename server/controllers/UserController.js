import userModel from "../models/User.js";
import bcrypt from "bcrypt";

const getAllUsers = async(req, res) => {
    try{
        const users = await userModel.find({});
        return res.status(200).json(users);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const deleteAllUsers = async(req, res) => {
    try{
        await userModel.deleteMany({});
        return res.status(200).json({message: "Users deleted!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const signup = async(req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const user = await userModel.findOne({
            email: email
        })
        if (user){
            return res.status(409).json({message: "Email is already in use."})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await userModel.create({
            role,
            name,
            email,
            password: hashedPassword,
            savedJobs: []
        })
        return res.status(200).json(userCreated);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({
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

export default {getAllUsers, deleteAllUsers, signup, login};