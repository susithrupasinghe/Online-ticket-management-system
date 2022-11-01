const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema({
    accountName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("qr", qrSchema);