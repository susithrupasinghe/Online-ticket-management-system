const busModel = require("../models/bus.model");

const createBus = async (req, res) => {
    try {
        const {busNo, busOwner, nic, rout, price} = req.body;
        const newBus = new busModel({
            busNo,
            busOwner,
            nic,
            rout,
            price,
        });
        const savedBus = await newBus.save();
        if(savedBus) {
            res.status(201).json({savedBus});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const getOneBus = async (req, res) => {
    try {
        const busId = req.params.id;
        const bus = await busModel.findById(busId);
        if(bus) {
            res.status(200).json({bus});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const getAllBus = async (req, res) => {
    try {
        const buses = await busModel.find();
        if(buses) {
            res.status(200).json({buses});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const updateBus = async (req, res) => {
    try {
        const busId = req.params.id;
        const {busNo, busOwner, nic, rout, price} = req.body;
        const updatedBus = await busModel.findByIdAndUpdate(busId, {busNo, busOwner, nic, rout, price}, {new: true});
        if(updatedBus) {
            res.status(200).json({updatedBus});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }   
}

const deleteBus = async (req, res) => {
    try {
        const busId = req.params.id;
        const deletedBus = await busModel.findByIdAndDelete(busId);
        if(deletedBus) {
            res.status(200).json({deletedBus});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

module.exports = {
    createBus,
    getOneBus,
    getAllBus,
    updateBus,
    deleteBus,
}