const { createUser, getOneUser, updateUser, loginUser, getAllUsers, rejectUser } = require('../controllers/user.controller');

const router = require('express').Router();

router.post("/", createUser);
router.get("/all", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.post("/login", loginUser);
router.put("/reject/:username", rejectUser);

module.exports = router;