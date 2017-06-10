var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var schema  = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    course: {type: String, required: true},
    modules: [{type: Schema.Types.ObjectId, ref:'Module'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);