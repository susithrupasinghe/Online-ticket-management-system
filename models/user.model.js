const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('user', user);