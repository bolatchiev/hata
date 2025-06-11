const ReviewService = require('../services/Review.service');
const {formatResponse} = require('../utils/formatResponse');

class ReviewController {
  static async getReviewsForTheCard(req, res) {
    const { cardId } = req.params;

    try {
      const cardReviews = await ReviewService.getAllReviewsForCard(cardId);
      return res
        .status(200)
        .json(
          formatResponse({
            statusCode: 200,
            message: 'Отзыв предоставлен',
            data: cardReviews,
          }),
        );
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json(
          formatResponse({
            statusCode: 500,
            message: 'Невозможнно найти отзывы',
            error: error.message,
          }),
        );
    }
  }

  static async add(req, res) {
    const { cardId } = req.params;
    const userId = res.locals.user.id;
    const { text } = req.body;
    try {
      const review = await ReviewService.addReview({ cardId, userId, text });
      return res
        .status(201)
        .json(
          formatResponse({
            statusCode: 200,
            message: 'Отзыв успешно добавлен',
            data: review,
          }),
        );
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(
          formatResponse({
            statusCode: 500,
            message: 'Internal server error',
            error: error.message,
          }),
        );
    }
  }

  static async getByCard(req, res) {
    const { cardId } = req.params;
    try {
      const reviews = await ReviewService.getAllReviewsForCard(cardId);
      return res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: reviews }));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(
          formatResponse({
            statusCode: 500,
            message: 'Internal server error',
            error: error.message,
          }),
        );
    }
  }
}
module.exports = ReviewController;
