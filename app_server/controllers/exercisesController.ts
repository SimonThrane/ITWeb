declare var require, module, process;
import { Exercise } from "../../domain/exercise";
var mongoose = require('mongoose');
var Exercisedb = mongoose.model('Exercise');
export class ExercisesController {

    getExercises(req: any, res: any, next: any) {
        //Fetch programs from db
        let exerciseResponse;
        Exercisedb.find()
            . exec((err, exercise) => {
                    exerciseResponse = exercise;
                    res.render('exercises',
                    {
                        exercises: exerciseResponse
                    });
                }
            );
    }

    getExercise(req: any, res: any, next: any) {
        let exerciseId = req.params.exerciseId;
        let exerciseResponse;
        //fetch from db based on id
        Exercisedb.findByid(exerciseId)
            . exec((err, exercise) => {
                    exerciseResponse = exercise;
                    res.render('exercise',
                    {
                        exercise: exerciseResponse
                    });
                }
            );
    }

    addExercise(req: any, res: any, next: any) {
        res.render('addExercise', {
            pageHeader: {
                title: 'Make exercise'
            }
        });
    }

    createExercise(req: any, res: any, next: any) {
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