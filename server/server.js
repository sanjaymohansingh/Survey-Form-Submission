const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const surveyRouter = require("./routes/surveyRoute");
const authRouter = require("./routes/userRoute");
const cors = require("cors");
const path = require("path");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const _dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use("/api/survey", surveyRouter);
app.use("/api/auth", authRouter);
app.use(express.static(path.join(_dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(5001, () => {
  console.log(`App Running on Port Number : 5001`);
});
