const { createTimeTable, getOneTimeTable, updateTimeTable, deleteTimeTable, getTimeTable } = require('../controllers/timetable.controller');

const router = require('express').Router();

router.post("/", createTimeTable);
router.get("/", getTimeTable);
router.get("/:id", getOneTimeTable);
router.put("/:id", updateTimeTable);
router.delete("/:id", deleteTimeTable);

module.exports = router;