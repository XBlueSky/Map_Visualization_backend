var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var districtTW = new Schema({
  address : String,
  lat : Number,
  lon : Number,
  num : Number
});
module.exports = mongoose.model('districtTW',districtTW,'districtTW');
