import express from "express";
import routes from "../routes";
import { handleMe } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, handleMe);

export default userRouter;
