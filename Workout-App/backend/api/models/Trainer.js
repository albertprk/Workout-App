var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trainerSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "gender": String,
    "gym": [
        String
    ],
    "description": String,
    "email": String,
    "phone": String,
    "joiningDate": String,
    "profilePicture": String,
    "tags": [
        String
    ],
    "cost": Number,
    "overall_rate": Number,
    "user": String,
    "comments": [
        {
            "fullname": String,
            "context": String,
            "date": Date,
            "rate": Number
        }
    ]
}, { collection : "trainers"});

module.exports = mongoose.model('Trainer', trainerSchema);
