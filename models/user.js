const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    requestes: Array,
    booking: Array
});

module.exports = mongoose.model('User', UserSchema);