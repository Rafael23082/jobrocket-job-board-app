import express from "express";
import ApplicationController from "../controllers/ApplicationController.js";
import { verify } from "../middlewares/authMiddleware.js";

const applicationRoutes = express.Router();

applicationRoutes.post("/applyJob", verify, ApplicationController.applyJob);
applicationRoutes.delete("/deleteApplicationById/:applicationID", ApplicationController.deleteApplicationByID);
applicationRoutes.get("/getAllApplications", ApplicationController.getAllApplications);
applicationRoutes.get("/getApplicationByUserIDAndJobID/:userID/:jobID", verify, ApplicationController.getApplicationByUserIDAndJobID);
applicationRoutes.delete("/deleteAllApplications", ApplicationController.deleteAllApplications);
applicationRoutes.get("/getJobApplicants/:jobID", verify, ApplicationController.getJobApplicants);
applicationRoutes.put("/updateApplicationStatus/:userID/:jobID", verify, ApplicationController.updateApplicationStatus);

export default applicationRoutes;