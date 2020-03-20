var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/supersecreturl452', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../private/longevity.html'));
});

module.exports = router;
