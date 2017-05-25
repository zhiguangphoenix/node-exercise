var express = require('express');
var router = express.Router();

router.get("/:user", function(req, res, next){
    res.send(req.params.user);
})

module.exports = router;