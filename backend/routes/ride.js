const express = require("express");
const router = express.Router();
const {getAllRides,createRide, deleteRide} = require("../controllers/ride");

router.route("/").get(getAllRides).post(createRide)

router.route("/:name").delete(deleteRide);

module.exports = router;