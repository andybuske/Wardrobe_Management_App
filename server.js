require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");
const createError = require("http-errors");


app.use(cors());
app.use(methodOverride("_method"));
app.use(express.json());

// ADDITIONAL LOG INFO WHEN YOU MAKE A REQUEST
app.use((req, res, next) => {
  let logStr = `${req.method} ${req.url}`;

  if (Object.keys(req.body).length !== 0) {
    logStr += ` -- DATA: ${JSON.stringify(req.body)}`;
  }

  console.log(logStr);
  console.log(req.body)
  next();
});

// HOMEPAGE
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

app.use("/api/owners", require("./controllers/ownersController.js"));
app.use("/api/clothes", require("./controllers/clothesController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
