var mongoose = require('mongoose');


// define user schema; set the "form" of the data
var userSchema = new mongoose.Schema({
	email: {type: String},
	password: {type: String},
	companyName: {type: String},
	products: {type: Array, default: []},
	feedback: {type: Array, default: []}
});

// export user IMPORTANT!
var User = module.exports = mongoose.model('User', userSchema);

// async query for user by name
module.exports.getUserByName = function(email, next) {
	var query = {email: email};
	User.findOne(query, next);
};

// async save user to mongodb
module.exports.addUser = function(newUser, next){
	newUser.save(next);
};

// async mutate feedback field in user document
module.exports.updateFeedback = function(email, newFeedback, next) {
	var query = {email: email};
																			 // returns new updated user
	User.findOne(query, (err, user) => {
		if (err) throw err;
		else if (!user) {
			res.json({success: false, msg: "no user!"});
		}
		else {
			user.feedback.push(newFeedback);
			user.save(next);
		}
	});
};
