const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	telphone: {
		type: String,
		required: true
	},
	logindate: {
		type: Date
	},
	createDate: {
		type: Date,
		required: true
	}
});
// let session = new Schema({
// 	name: {
// 		type: String
// 	},
// 	telphone: {
// 		type: String,
// 		required: true
// 	},
// })
module.exports = mongoose.model('User', user);