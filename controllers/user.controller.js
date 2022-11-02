const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
    try {
        const {name, username, phoneNumber, address, nic, password} = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = await new userModel({
            name,
            username,
            phoneNumber,
            address,
            nic,
            password: encryptedPassword,
        }).save();
        if(newUser) {
            res.status(201).json({newUser});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const getOneUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        if(user) {
            res.status(200).json({user});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const {name, username, phoneNumber, address, nic} = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(userId, {name, username, phoneNumber, address, nic}, {new: true});
        if(updatedUser) {
            res.status(200).json({updatedUser});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }   
}

const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await userModel.findOne({username});
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch) {
                res.status(200).json({user});
            }
            else {
                res.status(400).json({message: "Invalid username or password"});
            }
        }
        else {
            res.status(400).json({message: "Invalid username or password"});
        }
    }
    catch(err) {
        res.status(500).json({err});
    }
}

module.exports = {
    createUser,
    getOneUser,
    updateUser,
    loginUser,
}