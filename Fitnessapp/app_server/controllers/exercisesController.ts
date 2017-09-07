import { Exercise } from "../../domain/exercise";

export class ExercisesController {


    getExercises(req: any, res: any, next: any) {
        //Fetch programs from db
        res.render('exercises',
            {
                exercises: [
                    new Exercise('1', 'squat', 'ben', 8, 3, true),
                    new Exercise('2', 'dødløft', 'ryg', 8, 3, true),
                    new Exercise('3', 'bænk', 'bryst', 8, 3, true),
                    new Exercise('4', 'løb', 'ben', null, 1, false, 30)
                ]
            });
    }

    getExercise(req: any, res: any, next: any) {
        let exerciseId = req.params.exerciseId;

        //fetch from db based on id
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