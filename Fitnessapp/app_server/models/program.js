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
        max: 60
    },
    sets: {
        type: Number,
        'default': 3,
        min: 0,
        max: 5
    },
    descriptionText: String
});

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [exerciseSchema],
});

mongoose.model('Program', programSchema);