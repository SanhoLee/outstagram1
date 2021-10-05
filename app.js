import express from "express";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import meRouter from "./routers/meRouter";
import searchRouter from "./routers/searchRouter";
import routes from "./routes";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// middleware Setting
app.use(helmet());
app.use(cookieParser());
app.use(express.json()); //original was body-parser.
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //logger infomation.

// Router Setting
app.use(routes.home, globalRouter);
app.use(routes.me, meRouter);
app.use(routes.search, searchRouter);

export default app;
