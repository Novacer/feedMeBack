var express = require("express");
var router =  express.Router();
var User = require('../models/user');

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

router.post('/feedback', function(req, res, next) {
	// to be implemented once feedback form is finalized
	res.json({msg: "not yet implemented"});

});

module.exports = router;
