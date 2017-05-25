var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.all('/:username', function(req, res, next){
  // res.send("all");
  console.log("all");
  next();
})
router.get('/:username', function(req, res){
  res.send("user: " + req.params.username);
})
module.exports = router;
