
import { nanoid } from "nanoid";
import Job from '../models/JobModel.js';
import {StatusCodes} from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];


export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
}

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

// export const createJob = async (req, res) => {
//   const { company, position } = req.body;
//   if (!company || !position) {
//     return res.status(400).json({ message: "Please provide all values" });
//   }
//   const job = { id: nanoid(10), company, position };
//   jobs.push(job);
//   res.status(201).json({ job });
// }

export const getJob = async (req, res) => {
  const id = req.params.id;
  const job = await Job.findById(id);
  res.status(StatusCodes.OK).json({ job });
}

export const UpdateJob = async (req, res) => {
  const { company, position } = req.body;
  const { id } = req.params;
  const Updatedjob = await Job.findByIdAndUpdate(id, req.body, { new: true });
  res.status(StatusCodes.OK).json({ msg: 'job modified', job: Updatedjob });
}

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob = await Job.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removeJob });
}