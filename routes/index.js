var express = require('express');
var router = express.Router();

var path = require('path');

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
    if (err)
      next(err);
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
    if (err)
      next(err);
    else
      res.json({"success": true});
  });
});

module.exports = router;
