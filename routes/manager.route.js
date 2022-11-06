const {
  createManager,
  updateManager,
  loginManager,
} = require("../controllers/manager.controller");

const router = require("express").Router();

router.post("/", createManager);
router.put("/:id", updateManager);
router.post("/login", loginManager);

module.exports = router;
