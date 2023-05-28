const { Router } = require('express');
const { reviewController } = require('../controllers/reviews.controller');

const router = Router();

router.get('/reviews', reviewController.getReview);
router.post('/reviews', reviewController.createReview);
router.delete('/reviews', reviewController.deleteReview);

module.exports = router;
