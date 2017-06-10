var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema  = new Schema({
    user:{type: Schema.Types.ObjectId, ref:'User', required:true},
    content:{type: String, required:true},
    post:{type: Schema.Types.ObjectId, ref:'Post', required:true}
});

module.exports = mongoose.model('Comment', schema);