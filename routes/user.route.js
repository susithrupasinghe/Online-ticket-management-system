const { createUser, getOneUser, updateUser, loginUser, getAllUsers } = require('../controllers/user.controller');

const router = require('express').Router();

router.post("/", createUser);
router.get("/all", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.post("/login", loginUser);

module.exports = router;