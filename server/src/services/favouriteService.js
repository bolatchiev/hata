const { Favorite, Card, User } = require('../../db/models');

class FavoriteService {
  static async addFavourite(userId, cardId) {
    const favourites = await Favorite.create({ userId, cardId });
    return favourites;
  }

  static async removeFavorite(userId, cardId) {
    const deletedCount = await Favorite.destroy({
      where: { userId, cardId },
    });
    return deletedCount;
  }

  static async getAllForTest() {
    const result = await Favorite.findAll();
    return result;
  }

  static async getFavoritesByUser(userId) {
    const result = await Favorite.findAll({
      where: { userId },
    });
    return result;
  }

  static async checkIsFavourite(userId, cardId) {
    const favourite = await Favorite.findOne({
      where: { userId, cardId },
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
