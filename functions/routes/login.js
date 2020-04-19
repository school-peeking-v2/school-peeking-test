const express = require("express");
const router = express.Router();
const firebase = require("./firebaseConfig");

const functions = require("firebase-functions");

router.get("/", (req, res) => {
  console.log("login view");
  res.render("login");
});

router.post("/signIn", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  console.log(email, password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userResult) => {
      console.log("login success");
      return;
    })
    .catch((err) => {
      var errorCode = err.errorCode;
      var errorMessege = err.errorMessege;
      console.log(
        "login error : errorCode is %s, errorMessege is %s",
        errorCode,
        errorMessege
      );
    });

  res.redirect("http://localhost:5000/");
});

// module.exports = router;
module.exports = router;
