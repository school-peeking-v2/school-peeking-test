const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('login view');
  //res.render("login");
  res.render('login');
});

router.post('/signIn', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
});

// module.exports = router;
module.exports = router;
