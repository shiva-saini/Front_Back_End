import { Router } from "express";
import { validateIdParam } from "../middleware/validationMiddleware.js";
const router = Router();

import {
    getAllJobs,
    createJob,
    getJob,
    deleteJob,   
    UpdateJob
} from "../controllers/jobController.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

//get all jobs  
router.get("/all-jobs", getAllJobs);

router.route("/job")
    .post(validateJobInput,createJob);
router.route("/job/:id")
    .get(validateIdParam,getJob)
    .patch(validateJobInput,UpdateJob)
    .delete(validateIdParam,deleteJob); 
export default router; 