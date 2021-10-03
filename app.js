import express from "express";
import routes from "./routes";

const app = express();

const sayHello = (req, res) => res.send("hello world ! I'm Lee. lalala");
const handleMe = (req, res) => res.send("This is me page.");
const handleSearch = (req, res) => res.send("This is search page.");

app.get("/", sayHello);
app.get("/me", handleMe);
app.get("/search", handleSearch);

export default app;
