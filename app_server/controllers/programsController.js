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
        let allExercises;
        let promise = new Promise((resolve, reject) => {
            Programs.findById(programId)
                .exec(function (err, programs) {
                programResponse = programs;
                Exercises.find({
                    '_id': { $in: programResponse.exercises }
                }).exec((err, exercises) => {
                    exercisesResponse = exercises;
                    Exercises.find({
                        '_id': { $nin: programResponse.exercises }
                    }).exec((err, exercises) => {
                        allExercises = exercises;
                        resolve();
                    });
                });
            });
        });
        promise.then(() => {
            let programVM = programResponse;
            programResponse.exercises = exercisesResponse;
            res.render('program', {
                program: programResponse,
                exercises: allExercises
            });
        });
    }
    addExerciseToProgram(req, res, next) {
        //Add exercise id to program
        let exerciseId = req.body.exercise;
        let programId = req.params.programId;
        Programs.update({ _id: programId }, { $push: { exercises: exerciseId } }, () => {
            res.redirect('/programs/' + programId);
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
        res.redirect('/programs');
    }
}
exports.ProgramsController = ProgramsController;
