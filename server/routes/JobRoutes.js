import express from "express";
import JobController from "../controllers/JobController.js";

const jobRoutes = express.Router();

jobRoutes.get("/getAllJobs", JobController.getAllJobs);
jobRoutes.post("/addJob", JobController.addJob);
jobRoutes.delete("/deleteJob/:jobID", JobController.deleteJob);

export default jobRoutes;