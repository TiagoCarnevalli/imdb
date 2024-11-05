const express = require('express');
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, movieController.createMovie);
router.get('/', movieController.getMovies);
router.post('/vote', authMiddleware, movieController.voteMovie);

module.exports = router;
