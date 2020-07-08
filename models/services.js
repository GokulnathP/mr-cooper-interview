const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    name: String,
    city: String,
    workers: Array,
    requestes: Array
});

module.exports = mongoose.model('Service', ServiceSchema);