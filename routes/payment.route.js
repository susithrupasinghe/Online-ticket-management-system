const router = require('express').Router();
const { addPayment, getOnePayment, getAllPayments } = require('../controllers/payment.controller');

router.post("/", addPayment);
router.get("/:id", getOnePayment);
router.get("/", getAllPayments);

module.exports = router;