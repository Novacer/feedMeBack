var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var passport = require("passport");

// connect to mlab database
mongoose.connect('mongodb://weiminloh:12345@ds231568.mlab.com:31568/my_users');

// log connection success
mongoose.connection.on('connected', function(){
	console.log("Connected to database");
});

// log connection error
mongoose.connection.on('error', function(err){
	console.log(err);
});

// using express
var app = express();

// using CORS middleware
app.use(cors());

// set static folder as public
app.use(express.static(path.join(__dirname, 'public')));

// can access req.body in users
app.use(bodyParser.json());

// set users path
var users = require('./routes/users');

// set API base route
app.use('/users', users);

// heroku environment ports
var port = process.env.PORT || 8080;

// get base url
app.get('/', function(request, response) {
  response.send("Hello World");
});

// send base content
app.get('/*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

// start serve at port
app.listen(port, () => console.log('Listening to port ' + port));
