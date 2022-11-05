const mongoose = require('mongoose');

const timetable = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    mon: {
        type: String,
    },
    tue: {
        type: String,
    },
    wed: {
        type: String,
    },
    thu: {
        type: String,
    },
    fri: {
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model('timetable', timetable);