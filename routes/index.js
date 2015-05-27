var express = require('express');
var app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    res.redirect('/');
});

module.exports = router;
