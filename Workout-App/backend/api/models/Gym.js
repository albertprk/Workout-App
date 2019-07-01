var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gymSchema = new Schema({
    _id: Number,
    name: String,
    address: String,
    description: String,
    spiel: String,
    hours: [String],
    tags: [String]
}, { collection: "gyms"});

module.exports = mongoose.model('Gym', gymSchema);