import { Exercise } from "../../domain/exercise";
var mongoose = require('mongoose');
var Exercisedb = mongoose.model('Exercise');
export class ExercisesController {

    getExercises(req: any, res: any, next: any) {
        //Fetch programs from db
        let exerciseResponse;
        Exercisedb.find()
            . exec(
                function (err, exercise) {
                    exerciseResponse = exercise;
                }
            );
        res.render('exercises',
            {
                exercises: exerciseResponse
            });

    }

    getExercise(req: any, res: any, next: any) {
        let exerciseId = req.params.exerciseId;
        let exerciseResponse;
        //fetch from db based on id
        Exercisedb.findByid(exerciseId)
            . exec(
                function (err, exercise) {

                    exerciseResponse = exercise;
                }
            );
        res.render('exercise',
            {
                exercise: exerciseResponse
            });
        res.render('exercise', {
            exercise: new Exercise('1', "Squat", "tough", 12, 3, true)
        });
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
        console.log(req.body);

        res.sendStatus(200);
    }
}