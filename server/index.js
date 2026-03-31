import express from "express";
import jobRoutes from "./routes/JobRoutes.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import applicationRoutes from "./routes/ApplicationRoute.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use("/api/job", jobRoutes);
app.use("/api/user", userRoutes);
app.use("/api/application", applicationRoutes);
app.use("/api/auth", authRoutes);

connectDB();
app.listen(4000, () => {
        console.log("Server is running on port 4000.")
    })