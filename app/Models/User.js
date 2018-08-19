var mongoose = require('mongoose');

var User = mongoose.model('Users', {
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	}
});

module.exports = {User}