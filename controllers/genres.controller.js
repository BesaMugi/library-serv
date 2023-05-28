const Genre = require("../models/Genre.model")

module.exports.genreController = {
    getGenres: async (req, res) => {
        const data = await Genre.find({});
        res.json(data);
    },
    createGenre: async (req, res) => {
        Genre.create({
            title: req.body.title,
            description: req.body.description
        }).then(() => {
            res.json("Жанр добавлен")
        })
    },
    deleteGenre: async (req, res) => {
        const data = await Genre.findByIdAndRemove(req.params.id);
        res.json("Жанр удален");
    }
};