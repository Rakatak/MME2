var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StreamSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    url: {type: String, required: true},
    state: {type: Number, required: false, default: 0}
});

module.exports = mongoose.model('Stream', StreamSchema);