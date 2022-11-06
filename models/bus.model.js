const mongoose = require('mongoose');

const bus = new mongoose.Schema({
    busNo: {
        type: String,
        required: true
    },
    busOwner: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    rout: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    
}, {timestamps: true});

module.exports = mongoose.model('bus', bus);