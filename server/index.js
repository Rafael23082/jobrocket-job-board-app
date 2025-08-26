import express from "express";
import jobRoutes from "./routes/JobRoutes.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import applicationRoutes from "./routes/ApplicationRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/job", jobRoutes);
app.use("/api/user", userRoutes);
app.use("/api/application", applicationRoutes);

connectDB();
app.listen(4000, () => {
        console.log("Server is running on port 4000.")
    })