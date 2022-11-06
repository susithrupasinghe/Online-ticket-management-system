const managerModel = require("../models/manager.model");
const bcrypt = require("bcrypt");
const createManager = async (req, res) => {
  try {
    const { name, username, phoneNumber, nic, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newManager = await new managerModel({
      name,
      username,
      phoneNumber,
      nic,
      password: encryptedPassword,
    }).save();
    if (newManager) {
      res.status(201).json({ newManager });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateManager = async (req, res) => {
  try {
    const managerId = req.params.id;
    const { name, username, phoneNumber, nic } = req.body;
    const updatedManager = await managerModel.findByIdAndUpdate(
      managerId,
      { name, username, phoneNumber, nic },
      { new: true }
    );
    if (updatedManager) {
      res.status(200).json({ updatedManager });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const loginManager = async (req, res) => {
  try {
    const { username, password } = req.body;
    const manager = await managerModel.findOne({ username });
    if (manager) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({ manager });
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

module.exports = {
  createManager,
  updateManager,
  loginManager,
};
