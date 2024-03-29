/**
 * Created by yeshajoshi on 8/6/2017.
 */
var q = require('q');

//var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
var connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/joshi-yesha-webdev';
/*
 if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
 var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
 var password = process.env.MLAB_PASSWORD_WEBDEV;
 connectionString = 'mongodb://' + username + ':' + password;
 connectionString += '@ds113505.mlab.com:13505/heroku_fk8qc0ph'; // user yours
 }
 */
// Replace "@ds157268.mlab.com:57268/heroku_nh37fqq4"
// above with your own URL given to you by mLab

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, {'useMongoClient': true});
mongoose.Promise = q.Promise;
module.exports = db;
console.log("Connected to MongoDB");