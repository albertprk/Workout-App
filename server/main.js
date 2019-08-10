import {Meteor} from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import Links from '/imports/api/links';
import express from 'express';
import {ServiceConfiguration} from 'meteor/service-configuration';


var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var trainersRouter = require("./routes/trainersRouter");
var gymsRouter = require('./routes/gyms')
var app = express();
var mongoose = require('mongoose');
var connected = false;

let port = process.env.PORT;
if (port == null || port == "") {
  port = 9000;
}


app.listen(port, () => console.log("listening on port"));


// start up mongo
// oliver's database
// const dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wrjir.mongodb.net/test?retryWrites=true&w=majority'
// brent's database
// dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-obiso.mongodb.net/workout-app?retryWrites=true&w=majority';

// let's use swolr work out Mongo Database
var dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-kclfx.mongodb.net/workout-app?retryWrites=true&w=majority';

// mongoose.connect(dbRoute, {dbName: 'workoutApp'});
// mongoose.connect(dbRoute, {dbName: 'swolr'}, { useNewUrlParser: true }, (error) => {
//     //var db = mongoose.connect(dbRoute,(error) => {
//
//     console.log("connecting to mongo...");
//     if (error) {
//         console.log("error connecting to mongodb");
//         console.log(error);
//     } else {
//         console.log("successful connection to mongodb");
//         connected = true;
//     }.catch(function(error){
//             console.log('Error getting the posts');
//         });
// });

try {
      mongoose.connect(dbRoute, {dbName: 'swolr'}, { useNewUrlParser: true }); 
    } catch (error) {
      console.log(errror);
      process.exit(1);
    }

// test mongo connectivity
app.get('/test_mongo', (req, res) => {
    if (connected) {
        console.log("connected to mongo");
        res.send({express: 'YOUR MONGO DATABASE IS CONNECTED TO REACT'});
    }
});
//
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/testing', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/trainersAPI", trainersRouter);
app.use('/gymsAPI', gymsRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//
// });
//
module.exports = app;

function insertLink(title, url) {
    Links.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {

  Meteor.publish(null, function () {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        Trainer: 1
      }
    });
  });

  Meteor.users.allow({
    update: function (userId, user, fields, modifier) {
      // can only change your own documents
    if(user._id === userId)
      {
        Meteor.users.update({_id: userId}, modifier);
        return true;
      }
        else return false;
    }
  });

    ServiceConfiguration.configurations.upsert(
        {service: 'google'},
        {
            $set: {
                clientId: '863817864087-nk7oa8t4s2hgeh2eoqbf2lmtc8ppfdh4.apps.googleusercontent.com',
                loginStyle: 'popup',
                secret: 'gOhhSxJFZiqt7zktd6BQwcwm',
            },
        }
    );

    // If the Links collection is empty, add some data.
    if (Links.find().count() === 0) {
        insertLink(
            'Do the Tutorial',
            'https://www.meteor.com/tutorials/react/creating-an-app'
        );

        insertLink(
            'Follow the Guide',
            'http://guide.meteor.com'
        );

        insertLink(
            'Read the Docs',
            'https://docs.meteor.com'
        );

        insertLink(
            'Discussions',
            'https://forums.meteor.com'
        );
    }
});

WebApp.connectHandlers.use(app);
