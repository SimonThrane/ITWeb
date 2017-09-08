import * as mongoose from 'mongoose';

const exerciseSchema = module.exports.exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    repetitions: {
        type: Number,
        'default': 12,
        min: 0,
        max: 20
    },
    sets: {
        type: Number,
        'default': 3,
        min: 0,
        max: 5
    },
    creater: {
        type: Number,
        min: 0,
        max: 60
    },
    description: String,
    isRepitition: Boolean,
    time:{
        type: Number,
        min: 0,
        max: 60
    }
});

const programSchema = module.exports.programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [exerciseSchema],
    category: String,
    creater: String,
    create_date: Date
});
