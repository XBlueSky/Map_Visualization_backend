var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var district = new Schema({
  time : Number,
  districtAllocate : []});
module.exports = mongoose.model('district',district,'district');
