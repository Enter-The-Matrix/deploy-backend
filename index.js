require('dotenv').config()

const express = require("express");


const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("helloworld");
});

app.get("/linkedin", (req, res) => {
    res.send("linkedin.helloworld");
  });

  app.get("/login", (req, res) => {
    res.send("linkedin.helloworld");
  });

app.listen(PORT, () => {
  console.log("listening to port:", PORT);
});
