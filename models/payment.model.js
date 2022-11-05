const mongoose = require('mongoose');

const payment = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('payment', payment);