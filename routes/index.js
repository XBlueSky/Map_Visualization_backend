var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/map');
var Count = require('./count');
// var Person = require('./person');
var District = require('./district');
var DistrictTW = require('./districtTW');
var MRT = require('./MRT');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection failed: '));
db.once('open', function(){
    console.log('mongoose opened!');
});

var Schema = mongoose.Schema;
var person = new Schema({
    name : Number,
    date : Number,
    info : []
});
var D = []
for(let i=1; i<=12; i++){
    D[i] = mongoose.model('D'+i,person,'D'+i);
}
// var D1  = mongoose.model('D1',person,'D1');

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

router.get('/districtTW',function(req,res){
    DistrictTW
    .find({}, {_id: 0, address: 1, lat: 1, lon :1, num :1})
    .sort({num: 1})
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/district/:time',function(req,res){
    var time =  parseInt(req.params.time);
    District
    .find({time: time}, {_id: 0, districtAllocate: 1})
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

router.get('/person/:distrct/:date',function(req,res){
    var distrct =  parseInt(req.params.distrct);
    var date =  parseInt(req.params.date);
    
    D[distrct]
    .find({date: date}, {_id: 0, name: 1, info: 1})
    .limit(500)
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

router.get('/person/:distrct/:name/:date',function(req,res){
    var distrct =  parseInt(req.params.distrct);
    var name =  parseInt(req.params.name);
    var date =  parseInt(req.params.date);
    
    D[distrct]
    .find({name: name, date: date}, {_id: 0, info: 1})
    .limit(1)
    .exec(function(err, docs){
        if(err) console.log(err);
        else{
            res.json(docs);
        }
    });
});

module.exports = router;
