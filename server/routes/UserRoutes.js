import express from "express";
import UserController from "../controllers/UserController.js";
import { verify } from "../middlewares/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.get("/getAllUsers", UserController.getAllUsers);
userRoutes.delete("/deleteAllUsers", UserController.deleteAllUsers);
userRoutes.delete("/deleteUserByID/:userID", UserController.deleteUserByID);
userRoutes.post("/signup", UserController.signup);
userRoutes.post("/login", UserController.login);
userRoutes.put("/updateUserDetails/:userID", verify, UserController.updateUserDetails);
userRoutes.post("/logout", verify, UserController.logout);
userRoutes.post("/autoLogin", UserController.autoLogin);
userRoutes.get("/fetchCandidateDashboardData/:userID", verify, UserController.fetchCandidateDashboardData)
userRoutes.get("/fetchRecruiterDashboardData/:userID", verify, UserController.fetchRecruiterDashboardData)

export default userRoutes;