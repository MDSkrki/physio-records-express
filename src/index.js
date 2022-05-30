import express from "express";
import "dotenv/config";
import morgan from "morgan";
import logger from "./config/logger.js";
import userRouter from "./user/router.js";
import cors from "cors";

const app = express();

// Middleware that will send info in logger about http requests
app.use(morgan("tiny", { stream: logger.stream }));

app.use(express.json());
app.use(cors());

app.get("/api/echo", (req, res) => {
  res.json({ api: "Alive" });
});

app.use("/api/user", userRouter);

export default app.listen(process.env.PORT, () => {
  console.log(`Server lifted at port ${process.env.PORT}`);
});
