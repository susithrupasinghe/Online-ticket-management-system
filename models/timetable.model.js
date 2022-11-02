const mongoose = require('mongoose');

const timetable = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bus'
    }
}, {timestamps: true});

module.exports = mongoose.model('timetable', timetable);