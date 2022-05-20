import express from "express";
import "dotenv/config";

const app = express();

app.get("/api/echo", (req, res) => {
  res.json({ api: "Alive" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server lifted at port ${process.env.PORT}`);
});
