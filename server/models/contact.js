// Import mongoose
var mongoose = require('mongoose');

// need an alias for mongoose.Schema
var Schema = mongoose.Schema;

// Define our contact Schema
var ContactSchema = new Schema({
	name: String,
	phoneNumber: String,
	email: String,
	provider: String,
	providerId: String,
	providerData: {},
}, {
	collection: 'contactInfo'
});

module.exports = mongoose.model('Contact', ContactSchema);