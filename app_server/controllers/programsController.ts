declare var require, module, process;
const mongoose = require('mongoose');
import { Program } from "../../domain/program";
import { Exercise } from "../../domain/exercise";
var Exercises = mongoose.model('Exercise');
var Programs = mongoose.model('Program');

export class ProgramsController {
    getPrograms(req: any, res: any, next: any) {
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
                res.render('programs',
                    {
                        programs: programResponse
                    });
            }
            );
    }

    getProgram(req: any, res: any, next: any) {
        let programId = req.params.programId;
        //fetch from db based on id
        let programResponse: any;
        let exercisesResponse: any;
        let allExercises: any;
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
        }
        );
    }

    addExerciseToProgram(req: any, res: any, next: any) {
        //Add exercise id to program
        let exerciseId = req.body.exercise;
        let programId = req.params.programId;
        Programs.update({ _id: programId },
            { $push: { exercises: exerciseId } },
            () => {
                res.redirect('/programs/' + programId);
            });
    }

    addProgram(req: any, res: any, next: any) {
        res.render('addProgram');
    }

    createProgram(req: any, res: any, next: any) {
        //Get from body
        Programs.create({
            name: req.body.name,
            category: req.body.category,
            create_date: new Date()
        });
        res.redirect('/programs');
    }
}