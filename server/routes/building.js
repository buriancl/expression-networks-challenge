const express = require("express");
const router = express.Router();

const {
  getAllBuilding,
  postCreateBuilding,
  putUpdateBuilding,
  deleteBuilding,
} = require("../controllers/building");

/**
 * @route GET api/building
 * @description get all building
 * @access public
 */

router.get("/", getAllBuilding);

/**
 * @route POST api/building
 * @description add a new building
 * @access public
 */

router.post("/", postCreateBuilding);
/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */

router.put("/:id", putUpdateBuilding);
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */

router.delete("/:id", deleteBuilding);

module.exports = router;
