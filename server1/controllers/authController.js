import User from '../models/UserModel.js';
import { BadRequestError } from '../errors/customErrors.js';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
export const register = async (req, res) => {
  const isFirstUser = await User.countDocuments() === 0;
  const role = isFirstUser ? 'admin' : 'user';
  const salt = await bcrypt.genSalt(10);    
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
  const user = await User.create({ ...req.body, role });
    res.status(StatusCodes.CREATED).json({ user });
}   

export const login = (req, res) => {
  res.send('User login endpoint');
}