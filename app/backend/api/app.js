var createError = require('http-errors');
var express = require('express');
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


// start up mongo
// oliver's database
// const dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wrjir.mongodb.net/test?retryWrites=true&w=majority'
// brent's database
// dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-obiso.mongodb.net/workout-app?retryWrites=true&w=majority';

// let's use swolr work out Mongo Database
var dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-kclfx.mongodb.net/workout-app?retryWrites=true&w=majority';

// mongoose.connect(dbRoute, {dbName: 'workoutApp'});
var db = mongoose.connect(process.env.MONGODB_URI || dbRoute, {dbName: 'swolr'}, (error) => {
    //var db = mongoose.connect(dbRoute,(error) => {
    console.log("connecting to mongo...");
    if (error) {
        console.log("error connecting to mongodb");
        console.log(error);
    } else {
        console.log("successful connection to mongodb");
        connected = true;
    }
});

// test mongo connectivity
app.get('/test_mongo', (req, res) => {
    if (connected) {
        console.log("connected to mongo");
        res.send({express: 'YOUR MONGO DATABASE IS CONNECTED TO REACT'});
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/trainers", trainersRouter);
app.use('/gyms', gymsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
