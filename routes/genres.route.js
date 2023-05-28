const { Router } = require('express');
const { genreController } = require('../controllers/genres.controller');

const router = Router();

router.get('/genres', genreController.getGenres);
router.post('/genres', genreController.createGenre);
router.delete('/genre', genreController.getGenres);

module.exports = router;