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
        let promise1 = new Promise((resolve, reject) =>{
            Programs.findById(programId)
                .exec(
                    function (err, programs) {
                        programResponse = programs;
                        resolve();
                    });
        });
        let promise2 = new Promise((resolve, reject) =>{
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
        }
        );
        function sortExercises(programExercises: Array<any>, other: Array<any>): Array<any> {
            let filteredExercises = other
                .filter((e) => !programExercises
                    .filter((pe) => pe._id !== e._id)
                        .length);
            return filteredExercises;
        }
    }

    addExerciseToProgram(req: any, res: any, next: any) {
        //Add exercise id to program
        let exerciseId = req.body.exercise;
        let exercise;
        let programId = req.params.programId;
            Programs.findById(programId)
                .exec(
                    (err, program) => {

                        Exercises.findById(exerciseId)
                            .exec(
                                function (err, exercises) {
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
                                    })
                                });
                    }

            )

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
        res.redirect('/Programs');
    }
}