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
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            name,
            email,
            password: hashedPassword
        })
        return res.status(200).json({message: "User created!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

export default {getAllUsers, deleteAllUsers, signup};