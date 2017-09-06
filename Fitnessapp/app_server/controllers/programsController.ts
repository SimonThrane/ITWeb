import { Exercise } from '../../domain/exercise';

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
            program: {
                exercises: [
                    new Exercise('squat', 'ben',8,3,true),
                    new Exercise('dødløft', 'ryg',8,3,true),
                    new Exercise('bænk', 'bryst',8,3,true),
                    new Exercise('løb', 'ben',null,1,false, 30)
                ]
            }
        })
    }
}