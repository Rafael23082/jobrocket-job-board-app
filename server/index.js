import express from "express";
import jobRoutes from "./routes/JobRoutes.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();

app.use("/api/jobs", jobRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000.")
})