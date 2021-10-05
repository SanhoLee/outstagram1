import express from "express";
import { handleSearch } from "../controllers/picController";
import routes from "../routes";

const picRouter = express.Router();

picRouter.get(routes.pics, handleSearch);

export default picRouter;
