const { Favorite, Card, User } = require('../../db/models');

class FavoriteService {
  static async addFavourite(userId, cardId) {
    const favourites = await Favorite.create({ userId, cardId });
    return favourites;
  }

  static async deleteFavourite(userId, cardId) {
    try {
      const numericUserId = Number(userId);
      const numericCardId = Number(cardId);

      const deletedCount = await Favorite.destroy({
        where: {
          userId: numericUserId,
          cardId: numericCardId,
        },
      });

      return deletedCount;
    } catch (error) {
      console.error('Error in deleteFavourite:', error);
      throw error;
    }
  }

  static async getFavoritesByUser(userId) {
    try {
      const result = await Favorite.findAll({
        where: { userId: Number(userId) },
      });

      return result;
    } catch (error) {
      console.error('Ошибка в getFavoritesByUser:', error);
      throw error;
    }
  }

  static async checkIsFavourite(userId, cardId) {
    const favourite = await Favorite.findOne({
      where: {
        userId: Number(userId),
        cardId: Number(cardId),
      },
    });

    return !!favourite;
  }

  static async switchFavorite(userId, cardId) {
    const exists = await Favorite.findOne({ where: { userId, cardId } });
    if (exists) {
      await exists.destroy();
      return { liked: false };
    }
    await Favorite.create({ userId, cardId });
    return { liked: true };
  }
}

module.exports = FavoriteService;
