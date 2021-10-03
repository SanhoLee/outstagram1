import express from "express";
import routes from "../routes";
import { sayHello } from "../controllers/picController";

const globalRouter = express.Router();

globalRouter.get(routes.home, sayHello);

export default globalRouter;
