import express from "express";

const app = express();

const PORT = 4000;
app.get("/", (req, res) => {
  res.send("hello world ! I'm Lee. ");
});

app.listen(4000, () => {
  console.log(`App Listening ... : http://localhost:${PORT}`);
});
