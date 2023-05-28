const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    review: String,
    name: String,
    bookId: {
        ref: "Book",
        type: mongoose.SchemaTypes.ObjectId
    }
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;