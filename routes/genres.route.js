const { Router } = require('express');
const { genreController } = require('../controllers/genres.controller');

const router = Router();

router.get('/genres', genreController.getGenre);
router.post('/genres', genreController.createGenre);
router.delete('/genre', genreController.deleteGenre);

module.exports = router;