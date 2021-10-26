import express from "express";
import { home } from "../controllers/picController";
import { getJoin, getMe, postJoin } from "../controllers/userController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, (req, res) => res.render("login"));

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.me, getMe);

// need to decide how to handle search flow.
globalRouter.get(routes.search);

export default globalRouter;
