const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('new-message');
});

module.exports = router;
