var createError = require("http-errors");
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var logger = require("morgan");

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

var session = require("./routes/session");
var login = require("./routes/login");
var inventory = require("./routes/inventory");

var app = express();

// // view engine setup
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(path.dirname(__dirname), "public"));
app.set("view engine", "html");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(path.dirname(__dirname), "public")));

app.use("/login", login);
app.use("/inventory", inventory);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("404");
});

const api = functions.https.onRequest(app);
module.exports = { api };
