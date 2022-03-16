// router/building.js
const express = require("express");
const router = express.Router();

const {
  getAllBuildings,
  postCreateBuilding,
  putUpdateBuilding,
  deleteBuilding,
} = require("../controllers/building");

router.get("/", getAllBuildings);

router.post("/", postCreateBuilding);

router.put("/:id", putUpdateBuilding);

router.delete("/:id", deleteBuilding);

module.exports = router;
