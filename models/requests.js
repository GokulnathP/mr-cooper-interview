const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    userId: mongoose.Schema.Types.ObjectId,
    serviceId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Request', RequestSchema);