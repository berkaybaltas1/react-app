import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("yo");
});

app.listen(3000);