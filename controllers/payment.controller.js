const paymentModel = require("../models/payment.model");

const addPayment = async (req, res) => {
    try {

        const {fullName, cardNumber, expDate, cvv} = req.body;
        const newPayment = await new paymentModel({
            fullName,
            cardNumber,
            expDate,
            cvv
        }).save();
        
        if(newPayment) {
            res.status(201).json({newPayment});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}


const getOnePayment = async (req, res) => {
    try {
        const paymentId = req.params.id;
        const payment = await paymentModel.findById(paymentId);
        if(payment) {
            res.status(200).json({payment});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const getAllPayments = async (req, res) => {
    try {
        const payments = await paymentModel.find();
        if(payments) {
            res.status(200).json({payments});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

module.exports = {
    addPayment,
    getOnePayment,
    getAllPayments,
}