"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersController_1 = require("../controllers/usersController");
var express = require('express');
var router = express.Router();
const usersController = new usersController_1.UsersController();
/* GET users listing. */
router.get('/', usersController.getUsers);
module.exports = router;
