var express = require('express');
var router = express.Router();

var path = require('path');

var Applicant = require('../models/Applicant.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  //res.render('index', { title: 'Express' });
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

module.exports = router;
