const express = require("express");
const router = express.Router();
const firebase = require("./firebaseConfig");

router.get("/", (req, res) => {
  console.log("login view");
  res.render("login");
});

router.post("/signIn", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userResult) => {
      console.log("login success");
      return;
    })
    .catch((err) => {
      console.log("login error : error : %s", err);
    });

  res.redirect("http://localhost:5000/");
});

// module.exports = router;
module.exports = router;
