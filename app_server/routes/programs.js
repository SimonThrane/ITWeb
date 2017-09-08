"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const programsController_1 = require("../controllers/programsController");
var express = require('express');
var router = express.Router();
const programsController = new programsController_1.ProgramsController();
/* GET users listing. */
router.get('/', programsController.getPrograms);
router.get('/addprogram', programsController.addProgram);
router.get('/:programId', programsController.getProgram);
router.post('/', programsController.createProgram);
router.post('/:programId/addExercise', programsController.addExerciseToProgram);
module.exports = router;
