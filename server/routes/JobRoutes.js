import express from "express";
import JobController from "../controllers/JobController.js";
import { verify } from "../middlewares/authMiddleware.js";

const jobRoutes = express.Router();

jobRoutes.get("/getAllJobs", JobController.getAllJobs);
jobRoutes.post("/addJob", verify, JobController.addJob);
jobRoutes.post("/addMultipleJobs", JobController.addMultipleJobs);
jobRoutes.delete("/deleteJob/:jobID", JobController.deleteJob);
jobRoutes.delete("/deleteAllJobs", JobController.deleteAllJobs);
jobRoutes.post("/saveJob", verify, JobController.saveJob);
jobRoutes.post("/removeSavedJob", verify, JobController.removeSavedJob);
jobRoutes.get("/getSavedJobs/:userID", verify, JobController.getSavedJobs);
jobRoutes.get("/getNotAppliedJobs/:userID", verify, JobController.getNotAppliedJobs);
jobRoutes.get("/getAppliedJobs/:userID", verify, JobController.getAppliedJobs);
jobRoutes.get("/getJobsPostedByRecruiter/:userID", verify, JobController.getJobsPostedByRecruiter);
jobRoutes.get("/getJobByID/:jobID", JobController.getJobByID);
jobRoutes.put("/updateJobByID/:jobID", verify, JobController.updateJobByID);

export default jobRoutes;