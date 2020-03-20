var express = require('express');
var router = express.Router();
var fibonacciController = require('../controllers/fibonacciController');

/* GET users listing. */
router.get('/recursive', function(req, res, next) {
  let n = 0;
  if(req.query.n && !(parseInt(req.query.n) < 0))
    n = parseInt(req.query.n);
  let result = fibonacciController.rFibonacci(n);
  res.send('' + result);
});

router.get('/iterative', function(req, res, next) {
  let n = 0;
  if(req.query.n && !(parseInt(req.query.n) < 0))
    n = parseInt(req.query.n);
  let result = fibonacciController.iFibonacci(n);
  res.send('' + result); 
});

module.exports = router;
