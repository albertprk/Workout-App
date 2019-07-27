
var express = require('express');
var router = express.Router();
var Trainer = require('../models/Trainer')
//var mongoose = require('mongoose');
//var connected = false;

//var dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-kclfx.mongodb.net/workout-app?retryWrites=true&w=majority';

// mongoose.connect(dbRoute, {dbName: 'workout-App'}); connecting the user database

// we can add more filter
var allTrainers = Trainer.find({}, function (err, trainers) {
    if (err) {
        console.log("error in getting all trainers");
        console.log(err);
    } else {
        console.log("trainers successfully loaded");
        console.log(trainers);
    }
});


router.get('/', function (req, res, next) {
    console.log("getting trainers in Route:   ");
    Trainer.find((err, trainers) => {
        if (err) {
            console.log("error in getting trainers mongo data");
            console.log(err);
            return res.json({success: false, error: err})
        }
        console.log("success in getting trainers mongo data");
        console.log(trainers);
        return res.json({success: true, data: trainers})

    })
    //console.log(t);
    // res.render('index', { title: 'Express' });
});

// getting a specfic trainers information, req have _id for the user
router.get('/gettrainer', function (req, res, next) {
    let user = req.query.user;
    console.log("coooooooooooooooooooooool" + user)
    Trainer.findOne({'user': user}, function(err, trainer){
        if(err) {
            console.log("error in getting specfic trainer");
            console.log(err);
            return res.json({success: false, error: err})
        }
        console.log("got trainer under user:" + user)
        return res.json({success: true, data: trainer})
  })
});

 /* POST reviews. */
 router.post('/', (req, res, next) => {
     console.log("POSTING...");
     console.log(req.body.trainer);
     var myData = new Trainer(req.body.trainer);
     myData.save()
         .then(item => {
             res.send(myData);
             console.log("saved gym");
         })
         .catch(err => {
             console.log(err);
             console.log("unable to save trainer");
         });
 });


/* GET home page. */


module.exports = router;


// [
// {
//   "firstName": "Rock",
//   "lastName": "Li",
//   "gender": "male",
//   "gym": "Ron Zalko's Fitness",
//   "description": "Rock works out 2 times a day for hours and eats 5000 calories to stay THE ROCK",
//   "email": "therock@gamil.com",
//   "tags":[
//     "power",
//     "arm",
//     "cardio",
//     "chest"
//   ],
//   "cost": 30.99,
//   "overall_rate": 9.5,
//   "comments":[
//     {
//       "fullname" : "Stevie Feliciano",
//       "context": "Hey guys, I highly recommend The Rock as a trainer. He's very friendly and professionl",
//       "date": "2019-01-01",
//       "rate": 10
//     },
//     {
//       "fullname" : "Danny Rose",
//       "context": " Expensive but worthy it!",
//       "date": "2019-02-01",
//       "rate": 10
//   }
// ]
// }
// ]
