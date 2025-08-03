import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://rafanderson777:RafaelBinus@cluster0.vpx9ra7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected!");
    }catch(err){
        console.log(err);
    }
}