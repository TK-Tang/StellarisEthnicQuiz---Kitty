const express = require("express");
const controller = require("../controllers/home.server.controller");

const router = express.Router();

// Home Page
router.get('/', controller.showHomePage);

module.exports = router;