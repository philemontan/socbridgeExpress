var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema  = new Schema({
    title: {type: String, required:true},
    content: {type: String, required:true},
    user: {type: Schema.Types.ObjectId},
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
});

module.exports = mongoose.model('Post', schema);