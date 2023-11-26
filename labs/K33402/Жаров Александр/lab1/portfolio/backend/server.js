const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routers/apiRouter");
const authRouter = require("./routers/authRouter");

const app = express();

const PORT = 3030;
const db = "mongodb://127.0.0.1:27017/portfolio";

mongoose
  .connect(db)
  .then((res) => console.log("Connect to DB"))
  .catch((error) => console.log(error));

app.use(cors());

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", authRouter);
app.use("/api", apiRouter);
