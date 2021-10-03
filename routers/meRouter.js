import express from "express";
import routes from "../routes";
import { handleMe } from "../controllers/userController";

const meRouter = express.Router();

meRouter.get(routes.me, handleMe);

export default meRouter;
