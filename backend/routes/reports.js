const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reports");
const checkAuth = require("../middleware/check-auth");

router.post("", checkAuth, reportController.createReport );
router.get("", checkAuth, reportController.getReports );
router.get("/:id", checkAuth, reportController.getReport );
router.delete("/:id", checkAuth, reportController.deleteReport );

module.exports = router;
