declare var require, module, process;
import { UsersController } from '../controllers/usersController';
var express = require('express');
var router = express.Router();

const usersController = new UsersController();

/* GET users listing. */
router.get('/', usersController.getUsers);

module.exports = router;
