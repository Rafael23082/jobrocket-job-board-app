import express from "express";
import JobController from "../controllers/JobController.js";

const jobRoutes = express.Router();

jobRoutes.get("/getAllJobs", JobController.getAllJobs);
jobRoutes.post("/addJob", JobController.addJob);
jobRoutes.post("/addMultipleJobs", JobController.addMultipleJobs);
jobRoutes.delete("/deleteJob/:jobID", JobController.deleteJob);
jobRoutes.delete("/deleteAllJobs", JobController.deleteAllJobs);
jobRoutes.post("/saveJob", JobController.saveJob);
jobRoutes.post("/removeSavedJob", JobController.removeSavedJob);
jobRoutes.get("/getSavedJobs/:userID", JobController.getSavedJobs);

export default jobRoutes;