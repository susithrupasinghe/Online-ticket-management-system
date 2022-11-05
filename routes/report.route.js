const { addReportData, getReportData } = require('../controllers/report.controller');

const router = require('express').Router();

router.post("/", addReportData);
router.get("/", getReportData);

module.exports = router;