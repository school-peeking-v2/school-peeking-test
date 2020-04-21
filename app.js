var createError = require("http-errors");
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var invenRouter = require("./routes/inventory");
var couponRouter = require("./routes/coupon");
var leaderRouter = require("./routes/leader");
var rankRouter = require("./routes/rank");

var app = express();

// view engine setup
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/inventory", invenRouter);
app.use("/coupon", couponRouter);
app.use("/leader", couponRouter);
app.use("/rank", couponRouter);

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
  res.render("error");
});

module.exports = app;

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/inventory', (req, res) => {
//     res.sendFile(__dirname + '/public/inventory.html');
// });

// app.listen(port, (err) => {
//     if(!err) {
//         console.log(`Listening on port ${port}`);
//     }
// });
