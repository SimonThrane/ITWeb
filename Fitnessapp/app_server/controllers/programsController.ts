import { Exercise } from '../../domain/exercise';
import { Program } from '../../domain/program';

export class ProgramsController {
    getPrograms(req: any, res: any, next: any) {
        //Fetch programs from db
        res.render('programs',
            {
                programs: [
                    {
                        id: 1,
                        name: "program1",
                        category: 'Mave',
                        date: new Date().toDateString()
                    },
                    {
                        id: 2,
                        name: "program2",
                        category: 'Ben',
                        date: new Date().toDateString()
                    },
                    {
                        id: 3,
                        name: "program3",
                        category: 'skulder',
                        date: new Date().toDateString()
                    }
                ]
            });
    }
    getProgram(req: any, res: any, next: any) {
        let programId = req.params.programId;

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