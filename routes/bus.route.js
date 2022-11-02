const router = require('express').Router();
const { createBus, getOneBus, getAllBus, updateBus, deleteBus } = require('../controllers/bus.controller');


router.post("/", createBus);
router.get("/:id", getOneBus);
router.get("/", getAllBus);
router.put("/:id", updateBus);
router.delete("/:id", deleteBus);

module.exports = router;