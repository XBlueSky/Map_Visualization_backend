var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/map');
var Count = require('./count');
var Person = require('./person');
var MRT = require('./MRT');
// var Route = require('./route');
// var Category = require('./category');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection failed: '));
db.once('open', function(){
    console.log('mongoose opened!');
});

// var Schema = mongoose.Schema;
// var web = new Schema({
//   url : String,
//   clicktimes : Number,
//   category : String
// });
// var Day  = mongoose.model('day',web,'day');
// var Week = mongoose.model('week',web,'week');
// var Month = mongoose.model('month',web,'month');

router.get('/MRT',function(req,res){
    MRT
    .find({}, {_id: 0, station_name_en: 1, line_code: 1, lat: 1, lon :1, num :1})
    .sort({num: 1})
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/count/:time',function(req,res){
    var time =  parseInt(req.params.time);
    Count
    .find({time: time}, {_id: 0, locationCount: 1})
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/person/:date',function(req,res){
    var date =  parseInt(req.params.date);
    var name =  parseInt(req.params.name);
    Person
    .find({date: date}, {_id: 0, info: 1})
    .limit(1000)
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/person/:name/:date',function(req,res){
    var date =  parseInt(req.params.date);
    var name =  parseInt(req.params.name);
    Person
    .find({name: name, date: date}, {_id: 0, info: 1})
    .limit(1)
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

/*
router.get('/poly/:url/:time',function(req,res){
    var month = req.params.time.substring(0, 6);
    Poly
    .find({url: req.params.url, month: month}, {_id: 0, clicktimes: 1})
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/route/:url/:time',function(req,res){
    var month = req.params.time.substring(0, 6);
    Route
    .find({url: req.params.url, month: month}, {_id: 0, ref: 1, des: 1})
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/specific/:url/:time',function(req,res){
    var month = req.params.time.substring(0, 6);
    Month
    .find({url: req.params.url, month: month}, {_id: 0, url: 1, clicktimes: 1})
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/:interval/:time',function(req,res){

    switch(req.params.interval){
        case 'day':
            var data = [];
            Day
            .find({day: req.params.time}, {_id: 0, url: 1, clicktimes: 1})
            .limit(100)
            .sort({clicktimes: -1})
            .exec(function(err, docs){
                if(err) console.log(err);
                else{
                    Day
                    .find({day: (parseInt(req.params.time)-1).toString()}, {_id: 0, url: 1, clicktimes: 1})
                    .limit(100)
                    .sort({clicktimes: -1})
                    .exec(function(err, pres){
                        docs.forEach(function(docValue, docIndex) {
                            pres.forEach(function(preValue, preIndex) {
                                if (docValue.url === preValue.url){
                                    docs[docIndex].change = docIndex - preIndex;
                                }
                            });
                        });
                        docs.forEach(e => {
                            data.push({url: e.url, clicktimes: e.clicktimes, change: e.change});
                        })
                        res.json(data);
                    });
                }
            });
            break;
        case 'week':
            var day = parseInt(req.params.time.substring(6, 8));
            var week = (day - day%7).toString();
            week = week.length == 1 ? "0"+week : week;
            week = req.params.time.substring(0, 6) + week;
            Week
            .find({week: week}, {_id: 0, url: 1, clicktimes: 1})
            .limit(100)
            .sort({clicktimes: -1})
            .exec(function(err, docs){
                if(err) console.log(err);
                else{
                    res.json(docs);
                }
            });
            break;
        case 'month':
            var month = req.params.time.substring(0, 6);
            Month
            .find({month: month}, {_id: 0, url: 1, clicktimes: 1, category: 1})
            .limit(100)
            .sort({clicktimes: -1})
            .exec(function(err, docs){
                if(err) console.log(err);
                else{
                    res.json(docs);
                }
            });
            break;
	}
});

router.get('/month/:time/:cate',function(req,res){
    var month = req.params.time.substring(0, 6);
    var category;
    switch(req.params.cate){
        case 'null':
            category = null;
            break;
        case "NoneBlock":
            category =  { $ne: null };
            break;
        default :
            category = req.params.cate;
    }
    Month
    .find({month: month, category: category}, {_id: 0, url: 1, clicktimes: 1, category: 1})
    .limit(100)
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});
*/
module.exports = router;
