import express from "express";
import { picsDetail } from "../controllers/picController";
import routes from "../routes";

const picRouter = express.Router();

picRouter.get(routes.picsDetail(), picsDetail);
picRouter.get(routes.editPics, (req, res) => res.render("editPics"));
picRouter.get(routes.upload, (req, res) => res.render("upload"));

// there is no page for delete. Just Delete specific Pic.
picRouter.get(routes.deletePics);

export default picRouter;
