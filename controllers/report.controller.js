const Report = require('../models/report.model');
const addReportData = async (req, res) => {
    try {
        const {name, uv, pv} = req.body;
        const report = await new Report({name, uv, pv}).save();
        if(report) {
            res.status(200).json({report});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const getReportData = async (req, res) => {
    try {
        const report = await Report.find({});
        if(report) {
            res.status(200).json({report});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

module.exports = {
    addReportData,
    getReportData,
}