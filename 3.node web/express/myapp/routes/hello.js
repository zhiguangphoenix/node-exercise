var express = require("express");
var router = express.Router();

// get Hello Page
router.get("/hello", function(req, res, next){
    res.send("Time is: " + new Date().toString());
})

module.exports = router;