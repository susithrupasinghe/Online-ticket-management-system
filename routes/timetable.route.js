const { createTimeTable, getOneTimeTable, updateTimeTable, deleteTimeTable } = require('../controllers/timetable.controller');

const router = require('express').Router();

router.post("/", createTimeTable);
router.get("/:id", getOneTimeTable);
router.put("/:id", updateTimeTable);
router.delete("/:id", deleteTimeTable);

module.exports = router;