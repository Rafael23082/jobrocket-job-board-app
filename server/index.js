import express from "express";
import jobRoutes from "./routes/JobRoutes.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import applicationRoutes from "./routes/ApplicationRoute.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/job", jobRoutes);
app.use("/api/user", userRoutes);
app.use("/api/application", applicationRoutes);

connectDB();
app.listen(4000, () => {
        console.log("Server is running on port 4000.")
    })