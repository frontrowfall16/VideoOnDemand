var express = require('express');
var router = express.Router();
//var app = express();
var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});
router.post('/', function(req, res, next) {
  var user = req.body.uname;
  res.send(user + 'is what you sent');
});

module.exports = router;
