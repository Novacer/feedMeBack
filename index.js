var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var passport = require("passport");

mongoose.connect('mongodb://weiminloh:12345@ds153958.mlab.com:53958/feedbackusers');

mongoose.connection.on('connected', function(){
	console.log("Connected to database");
});

mongoose.connection.on('error', function(err){
	console.log(err);
});


var app = express();

var users = require('./routes/users');

app.use('/users', users);

var port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Listening to port ' + port));