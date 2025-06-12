const { Review, Card, User } = require('../../db/models');

class ReviewService {
  static async addReview({ cardId, userId, text }) {
    return Review.create({ cardId, userId, text });
  }

  static async getAllReviewsForCard(cardId) {
    return Review.findAll({
      where: { cardId },
      include: [{ model: User, attributes: ['name'] }],
      order: [['createdAt', 'DESC']],
    });
  }

  static async deleteReview({ userId, id }) {
    const review = await Review.findByPk(id);
    if (review) {
      await Review.destroy();
    }
    return review;
  }
}
module.exports = ReviewService;
