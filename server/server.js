import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("yo");
});

app.post("/api/register", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000);
