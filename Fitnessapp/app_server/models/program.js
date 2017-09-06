const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
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
    time: {
        type: Number,
        min: 0,
        max: 60
    },
    descriptionText: String
});

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [exerciseSchema],
    createdBy: String,
    create_date: Date
});

mongoose.model('Program', programSchema);