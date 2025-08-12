import express from "express";
import ApplicationController from "../controllers/ApplicationController.js";

const applicationRoutes = express.Router();

applicationRoutes.post("/applyJob", ApplicationController.applyJob);
applicationRoutes.delete("/deleteApplicationById/:applicationID", ApplicationController.deleteApplicationByID);
applicationRoutes.get("/getAllApplications", ApplicationController.getAllApplications);

export default applicationRoutes;