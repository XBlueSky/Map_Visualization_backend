var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MRT = new Schema({
  station_name_tw : String,
  station_name_en : String,
  line_code : String,
  lat : Number,
  lon : Number,
  num : Number
});
module.exports = mongoose.model('MRT',MRT,'MRT');
