import { Exercise } from '../../domain/exercise';
import { Program } from '../../domain/program';
import {Database} from '../models/db'
var mongoose = require('mongoose');
var Programs = mongoose.model('Program');
var Exercises = mongoose.model('Exercise');

export class ProgramsController {
    getPrograms(req: any, res: any, next: any) {
        //Fetch programs from db
        let programResponse;
        Programs.find()
            .exec(
                function (err, programs) {
                    programResponse = programs;
                }
            );

        res.render('programs',
            {
                programs: programResponse
            });
    }
    getProgram(req: any, res: any, next: any) {
        let programId = req.params.programId;
        let programResponse, exercisesResponse;
        Programs.findById(programId)
            .exec(
                function (err, programs) {
                    programResponse = programs;
                }
            );

        Exercises.find()
            .exec(
                function (err, exercises) {
                    exercisesResponse = exercises;
                }
            );
        //fetch from db based on id
        res.render('program', {
            program: new Program('123',
            [
                new Exercise('123', 'squat', 'ben', 8, 3, true),
                new Exercise('123', 'dødløft', 'ryg', 8, 3, true),
                new Exercise('123', 'bænk', 'bryst', 8, 3, true),
                new Exercise('123', 'løb', 'ben', null, 1, false, 30)
            ],'Standardprogram','Kasper',new Date()),
            exercises: [
                new Exercise('123', 'squat', 'ben', 8, 3, true),
                new Exercise('123', 'dødløft', 'ryg', 8, 3, true),
                new Exercise('123', 'bænk', 'bryst', 8, 3, true),
                new Exercise('123', 'løb', 'ben', null, 1, false, 30)
            ]
        })
    }

    addExerciseToProgram(req: any, res: any, next: any) {
        //Add exercise id to program
        console.log(req.body);

        res.sendStatus(200);
    }

    addProgram(req: any, res: any, next: any) {
        res.render('addProgram');
    }

    createProgram(req: any, res: any, next: any) {
        //Get from body
        console.log(req.body);
        res.sendStatus(200);
    }
}