const express = require("express");
const { add } = require("./math");

const app = express();

app.get("/", (req, res) => {
  res.send("Azure DevOps Learning Project");
});

app.get("/add/:a/:b", (req, res) => {
  const result = add(Number(req.params.a), Number(req.params.b));

  res.json({ result });
});

module.exports = app;
