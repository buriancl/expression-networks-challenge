// router/building.js
const express = require("express");
const router = express.Router();

/**
 * @route GET api/building
 * @description get all building
 * @access public
 */
router.get("/");

/**
 * @route POST api/building
 * @description add a new building
 * @access public
 */
router.post("/");

/**
 * @route PUT api/building/:id
 * @description update building
 * @access public
 */
router.put("/:id");

/**
 * @route DELETE api/building/:id
 * @description delete building
 * @access public
 */
router.delete("/:id");

module.exports = router;
