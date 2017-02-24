// var express = require('express');
// var router = express.Router();

// router.get('/',function(req, res, next){
// 	res.send('demo');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('demo');
});

module.exports = router;