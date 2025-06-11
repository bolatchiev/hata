const ReviewController = require('../controllers/Review.controller');

const reviewRouter = require('express').Router();


reviewRouter
  // .get("/", ReviewController.getAllReview)
  .get('/:cardId', ReviewController.getReviewsForTheCard);
//   .post("/", ReviewController.addReview)
//   .put('/:cardId', ReviewController.updateReview)
//   .delete("/:id", ReviewController.deleteReview);

module.exports = reviewRouter;
