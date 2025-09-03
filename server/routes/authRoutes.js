import express from "express";
import { refreshToken } from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/refresh", refreshToken);

export default authRoutes;