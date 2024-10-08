var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('the index');
});

router.get('/julio', function(req, res, next) {
  res.send('Hello Julio in the index!');
});

module.exports = router;
