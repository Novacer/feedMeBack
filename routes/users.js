var express = require("express");
var router =  express.Router();
var User = require('../models/user');

// register the user
router.post('/register', function(req, res, next){

	let newUser = new User({
		email: req.body.email,
		password: req.body.password,
		companyName: req.body.companyName,
		products: req.body.products,
		feedback: []
	});

	User.addUser(newUser, function(err, user){
		if(err){
			res.json({success: false, msg: "Failed to register"});
		} else {
			res.json({success: true, msg:"Registration complete"});
		}
	});
});

// authenticate user login
router.post('/login', function(req, res, next){
	var email = req.body.email;
	var password = req.body.password;

	User.getUserByName(email, function(err, user){
		if(err) throw err;
		if (!user) {
			res.json({success: false, msg: "No user found"});
		} else {
			if (user.password == password) {
				return res.json({success: true, msg: "Login successful", user: user});
			} else {
				res.json({success: false, msg: "Invalid password"});
			}
		}
	});
});

// mutate the user's feedback array
router.post('/feedback', function(req, res, next) {
	// to be implemented once feedback form is finalized
	var email = req.body.email;
	var newFeedback = req.body.feedback;

	User.updateFeedback(email, newFeedback, function(err, user) {
		if (err) throw err;

		else if (!user) {
			res.json({success: false, msg: "Error!"});
		}
		else {
			res.json({success: true, user: user});
		}
	});
});

// generate a list of questions for the mobile client
router.post('/get-questions', function(req, res, next) {
	var email = req.body.email;

	User.getUserByName(email, function(err, user) {
		if (err) throw err;

		if (!user) {
			res.json({success: false, msg: "could not find user"});
		}
		else {
			var productArray = user.products;
			var questionArray = [];

			for (var i = 0; i < productArray.length; i++) {
				var question = "Please rate " + productArray[i] + " from 1 to 10.";
				questionArray.push(question);
			}

			res.json({success: true, questions: questionArray, products: productArray});
		}
	});
});

// export the router IMPORTANT!
module.exports = router;
