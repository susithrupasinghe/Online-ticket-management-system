const inspectorModel = require("../models/Inspector.model");
const bcrypt = require("bcrypt");
const createInspector = async (req, res) => {
  try {
    const { name, username, phoneNumber, nic, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newInspector = await new inspectorModel({
      name,
      username,
      phoneNumber,
      nic,
      password: encryptedPassword,
    }).save();
    if (newInspector) {
      res.status(201).json({ newInspector });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getOneInspector = async (req, res) => {
  try {
    const inspectorId = req.params.id;
    const inspector = await inspectorModel.findById(inspectorId);
    if (inspector) {
      res.status(200).json({ inspector });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateInspector = async (req, res) => {
  try {
    const inspectorId = req.params.id;
    const { name, username, phoneNumber, nic } = req.body;
    const updatedInspector = await inspectorModel.findByIdAndUpdate(
      inspectorId,
      { name, username, phoneNumber, address, nic },
      { new: true }
    );
    if (updatedInspector) {
      res.status(200).json({ updatedInspector });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const loginInspector = async (req, res) => {
  try {
    const { username, password } = req.body;
    const inspector = await inspectorModel.findOne({ username });
    if (inspector) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({ inspector });
      } else {
        res.status(400).json({ message: "Invalid username or password" });
      }
    } else {
      res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getAllInspectors = async (req, res) => {
  try {
    const inspectors = await inspectorModel.find({});
    if (inspectors) {
      res.status(200).json({ inspectors });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const assignInspector = async (req, res) => {
  try {
    const username = req.params.username;
    const assigned = req.body;
    console.log(username);
    const updatedInspector = await inspectorModel.findOneAndUpdate(
      username,
      { assigned: assigned },
      { new: true }
    );
    console.log(updatedInspector);
    if (updatedInspector) {
      res.status(200).json({ updatedInspector });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  createInspector,
  getOneInspector,
  updateInspector,
  loginInspector,
  getAllInspectors,
  assignInspector,
};
