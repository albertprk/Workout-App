var Gym = require('../models/Gym');
var express = require('express');
var router = express.Router();


/* GET reviews initial data */
router.get('/', (req, res, next) => {
    console.log("getting");
    Gym.find((err, gyms) => {
        if (err) {
            console.log("error in getting data");
            console.log(err);
            return res.json({ success: false, error: err })
        }
        console.log("success in getting data");
        console.log(gyms);
        return res.json({ success: true, data: gyms })
    })
});

/* POST reviews. */
router.post('/', (req, res, next) => {
    console.log("POSTING...");
    console.log(req.body.gym);
    var myData = new Gym(req.body.gym);
    console.log(myData);
    myData.save()
        .then(item => {
            res.send(myData);
            console.log("saved gym");
        })
        .catch(err => {
            console.log(err);
            console.log("unable to save gym");
        });
});

module.exports = router;