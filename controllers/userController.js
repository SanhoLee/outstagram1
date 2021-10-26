/* eslint-disable no-unused-vars */
import routes from "../routes";
import User from "../models/User";

export const getMe = (req, res) => {
  res.render("me");
};

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = async (req, res) => {
  const {
    body: { email, name, username, password },
  } = req;

  try {
    const user = await new User({
      name: name,
      userName: username,
      email: email,
      password: password,
    });

    // //register user on DB.
    await user.save((error) => {
      if (error) {
        console.log("user save error :: ", error);
        res.redirect(routes.home);
      } else {
        console.log(" ✅  User Registering Done ! ");
      }
    });

    // find query twice error -> make a clone() method on the end.
    await User.find((error, users) => {
      console.log("error : ", error);
      console.log("users : ", users.length);
      res.send(users);
    }).clone();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
