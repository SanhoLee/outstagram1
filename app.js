import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import meRouter from "./routers/meRouter";
import searchRouter from "./routers/searchRouter";

const app = express();

app.get(routes.home, globalRouter);
app.get(routes.me, meRouter);
app.get(routes.search, searchRouter);

export default app;
