const mongoose = require("mongoose");

const inspector = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    assigned: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("inspector", inspector);
