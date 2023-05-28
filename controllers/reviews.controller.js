
const Review = require("../models/Review.model");

module.exports.reviewController = {
    getReview: async (req, res) => {
        const data = await Review.find({bookId: req.body.bookId}).populate(
            "bookId", "-_id -authorId -genreId");
        res.json(data);
    },
    createReview: async (req, res) => {
        Review.create({
            review: req.body.review,
            name: req.body.name,
            bookId: req.body.bookId
        }).then(() => {
            res.json("Рецензия добавлена")
        })
    },
    deleteReview: async (req, res) => {
        const data = await Review.findByIdAndRemove(req.params.id);
        res.json("Рецензия удалена");
    }
}