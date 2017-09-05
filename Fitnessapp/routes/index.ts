import { HomeController } from '../controllers/homeController';
var express = require('express');
var router = express.Router();

const homeController = new HomeController();

/* GET home page. */
router.get('/', homeController.index);

module.exports = router;