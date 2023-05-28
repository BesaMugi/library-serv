const { Router } = require('express');
const { AuthorController, authorController } = require("../controllers/authors.controller");

const router = Router();

router.get('/authors', authorController.getAuthor);
router.post('/authors', authorController.createAuthor);
router.delete('/authors/:id', authorController.deleteAuthor);
router.patch('/authors/:id', authorController.patchAuthor);

module.exports = router;