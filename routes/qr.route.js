const { createQR, getOneQR, updateQR, deleteQR } = require('../controllers/qr.controller');

const router = require('express').Router();

router.post("/", createQR);
router.get("/:id", getOneQR);
router.put("/:id", updateQR);
router.delete("/:id", deleteQR);

module.exports = router;