const Book = require("../models/Book.model");

module.exports.bookController = {
    getBooks: async (req, res) => {
        const data = await Book.find({});
        res.json(data);
    },
    getBookId: async (req, res) => {
        const data = await Book.findById(req.body.id).populate("authorId genreId");
        res.json(data);
    },
    getBookGenreId: async (req, res) => {
        const data = await Book.findById({ genreId: req.body.genreId}).populate("authorId genreId");
        res.json(data);
    },
    createBook: async (req, res) => {
        Book.create({
            book: req.body.book,
            authorId: req.body.authorId,
            genreId: req.body.genreId
        }).then(() => {
            res.json('Автор добавлен')
        })
    },
    deleteBook: async (req, res) => {
        const data = await Book.findByIdAndRemove(req.params.id);
        res.json("Книга удалена");
    },
    patchBook: async (req, res) => {
        const data = await Book.findByIdAndUpdate(req.params.id, {
            book: req.body.book,
            authorId: req.body.authorId,
            genreId: req.body.genreId
        }).then(() => {
            res.json('Книга обновлена')
        })
    }
}