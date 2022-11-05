const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uv: {
        type: Number,
        required: true
    },
    pv: {
        type: Number,
        required: true
    }
});

module.exports = Report = mongoose.model('Report', reportSchema);