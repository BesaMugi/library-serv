const Author = require("../models/Author.model");

module.exports.authorController = {
    getAuthor: async (req, res) => {
        const data = await Author.find({});
        res.json(data);
    },
    createAuthor: async (req, res) => {
        Author.create({
            name: req.body.name,
            description: req.body.description
        }).then(() => {
            res.json('Автор добавлен')
        })
    },
    deleteAuthor: async (req, res) => {
        const data = await Author.findByIdAndRemove(req.params.id)
        res.json("Автор удален")
    },
    patchAuthor: async (req, res) => {
        const data = await Author.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
        }).then(() => {
            res.json('Автор обновлен')
        })
    }
};