var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET Mobile Json data. */
router.get('/', function(req, res, next) {
    //  res.render('index', { title: 'Express' });
    Mobile.find({},function (err,documents) {
        console.log(err);
        console.log(documents);
        res.json(documents);        
    })
});

router.post('/', function(req, res, next) {
    var data = req.body;
    var mobile = new Mobile({
        "name" : data.name,
        "color":data.color,
        "memory":data.memory,
        "price":data.price,
        "image":data.image,
        "isSoldOut":data.isSoldOut,
        "activeTab":data.activeTab
    });
    mobile.save(function (err,result) {
        console.log(err);
        console.log(result);
        res.json(result);
    })
});

var Mobile = mongoose.model('Mobile', { 
    "name":String,
    "color":String,
    "memory":String,
    "price":Number,
    "image":String,
    "isSoldOut":Boolean,
    "activeTab":String
});

module.exports = router;  