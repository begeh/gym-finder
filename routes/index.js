var express = require('express');
var router = express.Router();
const config = require("../public/javascripts/config");

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'GYM FINDER', key: config.MY_KEY});
});

module.exports = router;
