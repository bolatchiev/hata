const ReviewController = require('../controllers/Review.controller');
const verifyAccessToken = require('../middlewares/verifyAccesToken');

const reviewRouter = require('express').Router();

reviewRouter
  // .get("/", ReviewController.getAllReview)
  .get('/:cardId', ReviewController.getReviewsForTheCard)
  .post('/:cardId', verifyAccessToken, ReviewController.add)
  .get('/:cardId', ReviewController.getByCard)
  //   .post("/", ReviewController.addReview)
  //   .put('/:cardId', ReviewController.updateReview)
  .delete('/:userId/:id', ReviewController.deleteReview);

module.exports = reviewRouter;
