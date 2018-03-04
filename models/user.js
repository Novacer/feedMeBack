var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: {type: String},
	password: {type: String},
	companyName: {type: String},
	products: {type: Array, default: []},
	feedback: {type: Array, default: []}
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserByName = function(email, next) {
	var query = {email: email};
	User.findOne(query, next);
};

module.exports.addUser = function(newUser, next){
	newUser.save(next);
};

module.exports.updateFeedback = function(email, newFeedback, next) {
	var query = {email: email};
	var update = {feedback: newFeedback};

																			 // returns new updated user
	User.findOneAndUpdate(query, update, {new: true}, next);
};
