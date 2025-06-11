const router = require('express').Router();
const ReviewController = require('../controllers/Review.controller');

router
  // .get("/", ReviewController.getAllReview)
  .get('/:cardId', ReviewController.getReviewsForTheCard);
//   .post("/", ReviewController.addReview)
//   .put('/:cardId', ReviewController.updateReview)
//   .delete("/:id", ReviewController.deleteReview);

module.exports = router;
