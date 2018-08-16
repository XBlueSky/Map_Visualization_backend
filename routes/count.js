var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var count = new Schema({
  time : Number,
  locationCount : []});
module.exports = mongoose.model('count',count,'count');
