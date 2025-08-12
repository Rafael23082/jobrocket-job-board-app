import express from "express";
import UserController from "../controllers/UserController.js";

const userRoutes = express.Router();

userRoutes.get("/getAllUsers", UserController.getAllUsers);
userRoutes.delete("/deleteAllUsers", UserController.deleteAllUsers);
userRoutes.post("/signup", UserController.signup);
userRoutes.post("/login", UserController.login);
userRoutes.put("/updateUserDetails/:userID", UserController.updateUserDetails);

export default userRoutes;