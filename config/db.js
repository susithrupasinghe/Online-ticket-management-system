const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");
var con;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const getCon = async () => {

  if(!con){
    con = connectDB()
  }
  
  return con;

}

module.exports = getCon;
