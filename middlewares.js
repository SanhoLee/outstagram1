import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "outstagram";
  res.locals.routes = routes;
  next();
};
