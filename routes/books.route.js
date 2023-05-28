const { Router } = require('express');
const { bookController } = require('../controllers/books.controller');

const router = Router();

router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookId);
router.get('/books/genre/:id', bookController.getBookGenreId);
router.post('/books', bookController.createBook);
router.delete('/books/:id', bookController.deleteBook);
router.patch('/books/:id', bookController.patchBook);

module.exports = router;