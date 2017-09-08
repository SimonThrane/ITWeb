"use strict";
const homeController_1 = require("../controllers/homeController");
var express = require('express');
var router = express.Router();
const homeController = new homeController_1.HomeController();
/* GET home page. */
router.get('/', homeController.index);
module.exports = router;
