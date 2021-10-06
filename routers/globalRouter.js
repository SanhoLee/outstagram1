import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home), (req, res) => res.render("home");
globalRouter.get(routes.login, (req, res) => res.render("login"));
globalRouter.get(routes.join, (req, res) => res.render("join"));

// need to decide how to handle search flow.
globalRouter.get(routes.search);

export default globalRouter;
