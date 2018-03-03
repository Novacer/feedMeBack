var express = require("express");
var router=  express.Router();
var User = require('../models/user');

router.post('/register', function(req, res, next){
	let newUser = new User({
		email: req.body.email,
		password: req.body.password,
		products: req.body.products
	});

	User.addUser(newUser, function(err, user){
		if(err){
			res.json({success: false, msg: "Failed to register"});
		} else {
			res.json({success: true, msg:"Registration complete"});
		}
	});
});

module.exports = router;
