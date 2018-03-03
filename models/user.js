var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: {type: String},
	password: {type: String},
	companyName: {type: String},
	products: {type: Array, default: []}
});

var User = mongoose.model('User', userSchema);

module.exports.getUserByName = function(name, next) {
	var query = {username: name};
	User.findOne(query, next);
};

module.exports.addUser = function(newUser, next){
	newUser.save(function (err){
		if(err) throw err;
	});
};

