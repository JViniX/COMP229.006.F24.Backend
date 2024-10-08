var express = require('express');
var router = express.Router();

let usersController = require('../controller/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/julio', function(req, res, next) {
  res.send('Hello Julio!');
});

router.post('/create', usersController.create);

module.exports = router;
