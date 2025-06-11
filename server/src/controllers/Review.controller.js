const ReviewService = require('../services/Review.service');
const formatResponse = require('../utils/formatResponse');

class ReviewController {
  static async getReviewsForTheCard(req, res) {
    const { cardId } = req.params;

    try {
      const cardReviews = await ReviewService.getAllReviewsForCard(cardId);
      return res.status(200).json({ cardReviews });
    } catch (error) {
      return res.status(500).json({ error: 'Could not get reviewes' });
    }
  }

  static async add(req, res) {
    const { cardId } = req.params;
    const userId = res.locals.user.id;
    const { text } = req.body;
    try {
      const review = await ReviewService.addReview({ cardId, userId, text });
      return res.status(201).json(formatResponse(201, 'success', review));
    } catch (err) {
      console.error(err);
      return res.status(500).json(formatResponse(500, 'Internal server error'));
    }
  }

  static async getByCard(req, res) {
    const { cardId } = req.params;
    try {
      const reviews = await ReviewService.getAllReviewsForCard(cardId);
      return res.status(200).json(formatResponse(200, 'success', reviews));
    } catch (err) {
      console.error(err);
      return res.status(500).json(formatResponse(500, 'Internal server error'));
    }
  }
}
module.exports = ReviewController;
