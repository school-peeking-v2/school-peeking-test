var createError = require("http-errors");
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var logger = require("morgan");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

var authRouter = require("./functions/firebaseSession");
var loginRouter = require("./functions/login");
var invenRouter = require("./functions/inventory");

var app = express();

// // view engine setup
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/login", loginRouter);
app.use("/inventory", invenRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("404");
});

module.exports = app;
