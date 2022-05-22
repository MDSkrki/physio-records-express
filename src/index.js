import express from "express";
import "dotenv/config";
import morgan from "morgan";
import logger from "./config/logger.js";

const app = express();

// Middleware that will send info in logger about http requests
app.use(morgan('tiny', {stream: logger.stream}));

app.get("/api/echo", (req, res) => {
  res.json({ api: "Alive" });
});

export default app.listen(process.env.PORT, () => {
  console.log(`Server lifted at port ${process.env.PORT}`);
});
