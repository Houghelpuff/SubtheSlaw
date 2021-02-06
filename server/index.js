const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 3000;

const db = require("../db/index.js");
const orderRouter = require("../routes/order-router");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", orderRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
