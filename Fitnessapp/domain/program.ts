import { Exercise } from './exercise';

export class Program {
    constructor(
        public exercises: Exercise[], 
        public name: string,
        public creater: string,
        public create_date: Date
    ) {}

}