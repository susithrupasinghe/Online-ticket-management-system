const qrModel = require("../models/qr.model");

const createQR = async (req, res) => {
    try {
        const {accountName, date, time} = req.body;
        console.log(req.body);
        const qr = await new qrModel({accountName, date, time}).save();
        if(qr) {
            res.status(201).json({qr});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const getOneQR = async (req,res) => {
    try {
        const qrId = req.params.id;
        const qr = await qrModel.findById(qrId);
        if(qr) {
            res.status(200).json({qr});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const updateQR = async (req, res) => {
    try {
        const qrId = req.params.id;
        const {accountName, date, time} = req.body;
        const updatedQR = await qrModel.findByIdAndUpdate(qrId, {accountName, date, time}, {new: true});
        if(updatedQR) {
            res.status(200).json({updatedQR});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const deleteQR = async (req, res) => {
    try {
        const qrId = req.params.id;
        const deletedQR = await qrModel.findByIdAndDelete(qrId);
        if(deletedQR) {
            res.status(200).json({deletedQR});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

module.exports = {
    createQR,
    getOneQR,
    updateQR,
    deleteQR,
}