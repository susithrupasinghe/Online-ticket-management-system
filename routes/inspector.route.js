const {
  createInspector,
  getOneInspector,
  updateInspector,
  loginInspector,
  getAllInspectors,
  assignInspector,
} = require("../controllers/Inspector.controller");

const router = require("express").Router();

router.post("/", createInspector);
router.get("/all", getAllInspectors);
router.get("/:id", getOneInspector);
router.put("/:id", updateInspector);
router.post("/login", loginInspector);
router.put("/reject/:username", assignInspector);

module.exports = router;
