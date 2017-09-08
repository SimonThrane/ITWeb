"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Exercisedb = mongoose.model('Exercise');
class ExercisesController {
    getExercises(req, res, next) {
        //Fetch programs from db
        let exerciseResponse;
        Exercisedb.find()
            .exec((err, exercise) => {
            exerciseResponse = exercise;
            res.render('exercises', {
                exercises: exerciseResponse
            });
        });
    }
    getExercise(req, res, next) {
        let exerciseId = req.params.exerciseId;
        let exerciseResponse;
        //fetch from db based on id
        Exercisedb.findByid(exerciseId)
            .exec((err, exercise) => {
            exerciseResponse = exercise;
            res.render('exercise', {
                exercise: exerciseResponse
            });
        });
    }
    addExercise(req, res, next) {
        res.render('addExercise', {
            pageHeader: {
                title: 'Make exercise'
            }
        });
    }
    createExercise(req, res, next) {
        //Get from body
        Exercisedb.create({
            name: req.body.name,
            description: req.body.description,
            isRepetition: req.body.isRepetition,
            reps: req.body.reps,
            sets: req.body.sets,
            time: req.body.time,
            create_date: new Date()
        });
        res.redirect('/exercises');
    }
}
exports.ExercisesController = ExercisesController;
