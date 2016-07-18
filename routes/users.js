var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/User.js');

router.get('/', function(req, res, next) {
  User.find(function(err, users) {
    if (err)
      next(err);
    else {
      res.render('users/index');
    }
  });
});

module.exports = router;
