import express from "express";
import UserController from "../controllers/UserController.js";
import { verify } from "../middlewares/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.get("/getAllUsers", verify, UserController.getAllUsers);
userRoutes.delete("/deleteAllUsers", verify, UserController.deleteAllUsers);
userRoutes.post("/signup", UserController.signup);
userRoutes.post("/login", UserController.login);
userRoutes.put("/updateUserDetails/:userID", verify, UserController.updateUserDetails);
userRoutes.post("/logout", UserController.logout);
userRoutes.post("/autoLogin", UserController.autoLogin);

export default userRoutes;