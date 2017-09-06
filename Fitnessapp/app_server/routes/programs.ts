import { ProgramsController } from '../controllers/programsController';
var express = require('express');
var router = express.Router();

const programsController = new ProgramsController();

/* GET users listing. */
router.get('/', programsController.getPrograms);
router.get('/addprogram', programsController.addProgram);
router.get('/:programId', programsController.getProgram);
router.post('/', programsController.createProgram);

module.exports = router;
