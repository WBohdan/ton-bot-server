import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT!;

const app = express();

app.use("/static", express.static(path.join(__dirname, "../static")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
