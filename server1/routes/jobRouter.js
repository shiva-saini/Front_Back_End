import { Router } from "express";
const router = Router();

import {
    getAllJobs,
    createJob,
    getJob,
    editJob,
    deleteJob   
} from "../controllers/jobController.js";

//get all jobs  
router.get("/all-jobs", getAllJobs);

router.route("/job")
    .post(createJob);
router.route("/job/:id")
    .get(getJob)
    .patch(editJob)
    .delete(deleteJob); 
export default router; 