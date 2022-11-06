const timetableModel = require("../models/timetable.model");

const createTimeTable = async (req, res) => {
  try {
    const { time, mon, tue, wed, thu, fri } = req.body;
    const newTimeTable = await new timetableModel({
      time,
      mon,
      tue,
      wed,
      thu,
      fri,
    }).save();

    if (newTimeTable) {
      res.status(201).json({ newTimeTable });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getTimeTable = async (req, res) => {
  try {
    const timeTable = await timetableModel.find({});
    if (timeTable) {
      res.status(200).json({ timeTable });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getOneTimeTable = async (req, res) => {
  try {
    const timeTableId = req.params.id;
    const timeTable = await timetableModel.findById(timeTableId);
    if (timeTable) {
      res.status(200).json({ timeTable });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateTimeTable = async (req, res) => {
  try {
    const timeTableId = req.params.id;
    const { time, mon, tue, wed, thu, fri } = req.body;
    const updatedTimeTable = await timetableModel.findByIdAndUpdate(
      timeTableId,
      { time, mon, tue, wed, thu, fri },
      { new: true }
    );
    if (updatedTimeTable) {
      res.status(200).json({ updatedTimeTable });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

const deleteTimeTable = async (req, res) => {
  try {
    const timeTableId = req.params.id;
    const deletedTimeTable = await timetableModel.findByIdAndDelete(
      timeTableId
    );
    if (deletedTimeTable) {
      res.status(200).json({ deletedTimeTable });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  createTimeTable,
  getOneTimeTable,
  updateTimeTable,
  deleteTimeTable,
  getTimeTable,
};
