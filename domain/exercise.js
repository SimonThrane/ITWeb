"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exercise {
    constructor(id, name, description, repetitions, sets, isRepetition, time) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.repetitions = repetitions;
        this.sets = sets;
        this.isRepetition = isRepetition;
        this.time = time;
    }
}
exports.Exercise = Exercise;
