export class Exercise {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public repititions: number,
        public sets: number,
        public isRepitition: boolean,
        public time?: number
    ) {}
}