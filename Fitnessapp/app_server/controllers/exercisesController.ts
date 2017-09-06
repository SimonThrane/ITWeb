import {Exercise} from "../../domain/exercise";

export class ExercisesController {


    getExercises(req: any, res: any, next: any) {
        //Fetch programs from db
        res.render('exercises',
            {
                exercises: [
                    {
                        id: 1,
                        name: "Squat",
                        description: "tough",
                        repetitions: 12,
                        sets: 3,
                        isRepitition: true
                    },
                    {
                        id: 2,
                        name: "Dødloft",
                        description: "hård",
                        repetitions: 2,
                        sets: 3,
                        isRepitition: true
                    },
                    {
                        id: 3,
                        name: "Løb",
                        description: "hård",
                        repetitions: null,
                        sets: 1,
                        time: 60,
                        isRepitition: false
                    },
                ]
            });
    }
    getExercise(req: any, res: any, next: any) {
        let exerciseId = req.params.exerciseId;

        //fetch from db based on id
        res.render('exercise', {
            exercise: {
                id: 1,
                name: "Squat",
                description: "tough",
                repititions: 12,
                sets: 3,
                isRepitition: true
            }
        })
    }

    addExercise(req: any, res: any, next: any) {
        res.render('addExercise', {pageHeader:{
            title: 'Make exercise'
        }});
    }

    createExercise(req: any, res: any, next: any) {
        //Get from body
        console.log(req.body);
        res.sendStatus(200);
    }
}