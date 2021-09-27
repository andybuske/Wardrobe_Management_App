require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const createError = require("http-errors");


app.use(cors());
app.use(methodOverride("_method"));

// HOMEPAGE
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});


app.use("/api/users", require("./controllers/usersController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
