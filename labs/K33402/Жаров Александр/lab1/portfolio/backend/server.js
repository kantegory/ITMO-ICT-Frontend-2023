const express = require("express");

const app = express();

const PORT = 3030;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello client!");
  console.log("GET");
});
