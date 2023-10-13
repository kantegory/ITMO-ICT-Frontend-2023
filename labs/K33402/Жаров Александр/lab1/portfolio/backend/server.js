const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

const PORT = 3030;
const db = "mongodb://127.0.0.1:27017/portfolio";

mongoose
  .connect(db)
  .then((res) => console.log("Connect to DB"))
  .catch((error) => console.log(error));

app.use(cors("http://localhost:3000"));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/get-users", (req, res) => {
  console.log("GET users");
  User.find()
    .then((users) => res.send(users))
    .catch((error) => console.log(error));
});

app.get("/api/get-user/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send(user))
    .catch((error) => console.log(error));
});

app.post("/api/create-user", (req, res) => {
  console.log(req.body);
  const { name, password, about } = req.body;
  const user = new User({ name, password, about });
  console.log(user);
  user
    .save()
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
});
