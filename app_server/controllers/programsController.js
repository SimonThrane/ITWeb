"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
var Exercises = mongoose.model('Exercise');
var Programs = mongoose.model('Program');
class ProgramsController {
    getPrograms(req, res, next) {
        //Fetch programs from db
        let programResponse;
        Programs.find()
            .exec((err, programs) => {
            programResponse = programs.map((p) => {
                let mappedProgram = {
                    id: p._id,
                    name: p.name,
                    category: p.category,
                    date: p.create_date.toLocaleString()
                };
                return mappedProgram;
            });
            res.render('programs', {
                programs: programResponse
            });
        });
    }
    getProgram(req, res, next) {
        let programId = req.params.programId;
        //fetch from db based on id
        let programResponse;
        let exercisesResponse;
        let promise1 = new Promise((resolve, reject) => {
            Programs.findById(programId)
                .exec(function (err, programs) {
                programResponse = programs;
                resolve();
            });
        });
        let promise2 = new Promise((resolve, reject) => {
            Exercises.find()
                .exec((err, exercises) => {
                exercisesResponse = exercises;
                resolve();
            });
        });
        Promise.all([promise1, promise2]).then(() => {
            let sortedExercises = sortExercises(programResponse.exercises, exercisesResponse);
            res.render('program', {
                program: programResponse,
                exercises: sortedExercises
            });
        });
        function sortExercises(programExercises, other) {
            let filteredExercises = other
                .filter((e) => !programExercises
                .filter((pe) => pe._id !== e._id)
                .length);
            return filteredExercises;
        }
    }
    addExerciseToProgram(req, res, next) {
        //Add exercise id to program
        let exerciseId = req.body.exercise;
        let exercise;
        let programId = req.params.programId;
        Programs.findById(programId)
            .exec((err, program) => {
            Exercises.findById(exerciseId)
                .exec(function (err, exercises) {
                exercise = exercises;
                program.exercises.push({
                    name: exercise.name,
                    sets: exercise.sets,
                    repetition: exercise.repetition,
                    description: exercise.description,
                    isRepetition: exercise.isRepetition
                });
                program.save(function (err, program) {
                    res.redirect('/Programs/' + programId);
                });
            });
        });
    }
    addProgram(req, res, next) {
        res.render('addProgram');
    }
    createProgram(req, res, next) {
        //Get from body
        Programs.create({
            name: req.body.name,
            category: req.body.category,
            create_date: new Date()
        });
        res.redirect('/Programs');
    }
}
exports.ProgramsController = ProgramsController;
