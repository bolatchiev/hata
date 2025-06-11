const { Favorite, Card, User } = require('../../db/models');

class FavoriteService {
  static async addFavourite(userId, cardId) {
    const existingFavourite = await Favorite.findOne({
      where: { userId, cardId },
    });
    if (existingFavourite) {
      return null;
    }
    const favourite = await Favorite.create({ userId, cardId });
    return favourite.get({ plain: true });
  }

  static async deleteFavourite(userId, cardId) {
    const deletedCount = await Favorite.destroy({
      where: { userId, cardId },
    });
    return deletedCount > 0;
  }

  static async getUserFavourites(userId) {
    const favourites = await Favorite.findAll({
      where: { userId },
      attributes: ['cardId'],
    });

    if (!favourites.length) return [];

    const cardIds = favourites.map((el) => el.cardId);
    const cards = await Card.findAll({
      where: { id: cardIds },
      raw: true,
    });

    const ownerIds = [...new Set(cards.map((c) => c.userId))];
    const owners = await User.findAll({
      where: { id: ownerIds },
      attributes: ['id', 'name', 'email'],
      raw: true,
    });

    return cards.map((card) => ({
      ...card,
      userPublisher: owners.find((el) => el.id === card.userId) || null,
    }));
  }

  static async checkIsFavourite(userId, cardId) {
    const favourite = await Favorite.findOne({
      where: { userId, cardId },
    });
    return !!favourite;
  }
}

module.exports = FavoriteService;
