const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    serviceId: mongoose.Schema.Types.ObjectId,
    workerId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    worker: {
        rating: Number,
        review: String
    },
    user: {
        rating: Number,
        review: String
    },
    isCompleted: Boolean
});

module.exports = mongoose.model('Booking', BookingSchema);