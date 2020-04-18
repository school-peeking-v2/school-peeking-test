const express = require("express");
const router = express.Router();

const firebase = require("../firebase-config");
const auth = require("firebase/auth");

router.get("/", (req, res) => {
  console.log("connected");
  res.render("index");
});

module.exports = router;
