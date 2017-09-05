const express = require('express');
const router = express.Router();
const ctrlPrograms = require('../controllers/programs');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlPrograms.homelist);
router.get('/program', ctrlPrograms.programInfo);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
