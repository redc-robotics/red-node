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

router.get('/cur', function(req, res, next) {
  if (req.session.passport && req.session.passport.user) {
    console.log(req.session.passport.user);
    User.findOne({ "email": req.session.passport.user }, function(err, user) {
      if (err)
        return next(err);
      res.json(user);
    });
  }
  else {
    res.status(401);
    res.json({ "success": false });
  }
});

module.exports = router;
