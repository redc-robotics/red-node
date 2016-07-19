var express = require('express');
var router = express.Router();

var path = require('path');

var passport = require('passport');
var User = require('../models/User.js');
var Applicant = require('../models/Applicant.js');
var Contact = require('../models/Contact.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
});

router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

router.get('/applicants', function(req, res, next) {
  Applicant.find(function(err, apps) {
    if (err)
      next(err);
    else
      res.json(apps)
  });
});

router.post('/join', function(req, res, next) {
  Applicant.create(req.body, function(err, post) {
    if (err) {
      err.status = 400;
      next(err);
    }
    else
      res.json({"success": true});
  });
});

router.get('/messages', function(req, res, next) {
  Contact.find(function(err, cs) {
    if (err)
      next(err);
    else
      res.json(cs);
  });
});

router.post('/contact', function(req, res, next) {
  Contact.create(req.body, function(err, post) {
    if (err) {
      err.status = 400;
      next(err);
    }
    else
      res.json({"success": true});
  });
});

router.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

router.post('/register', function(req, res) {
  User.register(new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.json({
        'success': false,
        user: user
      });
    }

    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});

router.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'dashboard.html'))
});

router.get('/login', function(req, res) {
  // console.log(req.session);
  //res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
  res.redirect('/dashboard');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  if (req.body.remember !== undefined)
    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
  else
    req.session.cookie.expires = false;
  
  res.json({ "success": true });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
