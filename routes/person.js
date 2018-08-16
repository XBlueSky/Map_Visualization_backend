var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var person = new Schema({
  name : Number,
  date : Number,
  info : []});
module.exports = mongoose.model('person',person,'person');
