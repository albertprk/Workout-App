var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gymSchema = new Schema({
    _id: Number,
    name: String,
    address: String,
    description: String,
    spiel: String,
    hours: [String],
    tags: [String],
    picture: String,
    rating: Number
}, {collection: "gyms"});

module.exports = mongoose.model('Gym', gymSchema);