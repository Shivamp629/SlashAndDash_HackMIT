var express = require('express');
var travel = require('../magic/travel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(
        {
            name:"Hello World"
        });
});

router.all('/search/:term', function(req, res, next) {

    res.json(
        {
            result: travel.flying(req.params.term)
        }
    )
});

module.exports = router;
