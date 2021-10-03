import express from "express";
import { handleSearch } from "../controllers/picController";
import routes from "../routes";

const searchRouter = express.Router();

searchRouter.get(routes.search, handleSearch);

export default searchRouter;
