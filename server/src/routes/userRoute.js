import { Router } from "express";
import { createUser } from "../controllers/userController.js";
const userRoute = new Router();

userRoute.post('/user', createUser);

export default userRoute;