const { createUser, getOneUser, updateUser, loginUser } = require('../controllers/user.controller');

const router = require('express').Router();

router.post("/", createUser);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.post("/login", loginUser);

module.exports = router;