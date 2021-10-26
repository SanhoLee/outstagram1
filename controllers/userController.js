import routes from "../routes";

export const getMe = (req, res) => {
  res.render("me");
};

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = (req, res) => {
  const {
    body: { email, name, username, password },
  } = req;

  res.redirect(routes.home);
};
