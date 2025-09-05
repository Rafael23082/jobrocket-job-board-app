import express from "express";
import ApplicationController from "../controllers/ApplicationController.js";
import { verify } from "../middlewares/authMiddleware.js";
import Application from "../models/Application.js";

const applicationRoutes = express.Router();

applicationRoutes.post("/applyJob", verify, ApplicationController.applyJob);
applicationRoutes.get("/getApplicationByUserIDAndJobID/:userID/:jobID", verify, ApplicationController.getApplicationByUserIDAndJobID);
applicationRoutes.get("/getJobApplicants/:jobID", verify, ApplicationController.getJobApplicants);
applicationRoutes.put("/updateApplicationStatus/:userID/:jobID", verify, ApplicationController.updateApplicationStatus);

export default applicationRoutes;