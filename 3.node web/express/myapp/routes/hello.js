var express = require("express");
var router = express.Router();

// get Hello Page
router.get("/", function(req, res, next){
    res.send("Time is: " + new Date().toString());
})
router.get("/czg", function(req, res, next){
    res.send("Hello czg");
})
module.exports = router;