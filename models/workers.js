const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
    name: String,
    timing: String,
    price: Number,
    bookings: Array,
});

module.exports = mongoose.model('Worker', WorkersSchema);