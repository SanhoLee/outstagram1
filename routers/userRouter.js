import express from "express";
import routes from "../routes";

const userRouter = express.Router();

// for me handleing.
userRouter.get(routes.me, (req, res) => res.render("me"));
userRouter.get(routes.editProfile, (req, res) => res.render("editProfile"));
userRouter.get(routes.changePassword, (req, res) =>
  res.render("changePassword")
);

// not me, another user.
userRouter.get(routes.userDetail, (req, res) => res.render("userDetail"));

export default userRouter;
