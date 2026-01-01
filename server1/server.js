import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// //get all jobs
// app.get("/api/v1/all-jobs", );

// //create job
// app.post("/api/v1/job", );

// //get single job
// app.get("/api/v1/job/:id", );

// // EDIT JOB

// app.patch('/api/v1/job/:id', );

// // DELETE JOB

// app.delete('/api/v1/job/:id',);

app.post(
  "/data",
  (req, res) => {
    debugger;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const receivedData = req.body;
    res.json({ message: "Data received successfully", data: receivedData });
  }
);

app.use("/api/v1", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
