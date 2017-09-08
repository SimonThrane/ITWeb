"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercisesController_1 = require("../controllers/exercisesController");
var express = require('express');
var router = express.Router();
const exercisesController = new exercisesController_1.ExercisesController();
/* GET users listing. */
router.get('/', exercisesController.getExercises);
router.get('/addexercise', exercisesController.addExercise);
router.get('/:exerciseId', exercisesController.getExercise);
router.post('/', exercisesController.createExercise);
module.exports = router;
