const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('roadview');
});

module.exports = router;
