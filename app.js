import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { localMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import picRouter from "./routers/picRouter";

import routes from "./routes";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// middleware Setting
app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "img")));
app.use(cookieParser());
app.use(express.json()); //original was body-parser.
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //logger infomation.

app.use(localMiddleware);

// Router Setting
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.pics, picRouter);

export default app;
