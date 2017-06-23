var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema  = new Schema({
    module_code:{type: String, required:true},
    name: {type: String, required:true},
    members: [{type:Schema.Types.ObjectId, ref: 'User'}],
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('Module', schema);