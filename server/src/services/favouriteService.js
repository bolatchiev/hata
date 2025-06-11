const { Favorite, Card, User } = require('../../db/models');

class FavoriteService {
  static async addFavourite(userId, cardId) {
    const favourites = await Favorite.create({ userId, cardId });
    return favourites;
  }

  static async deleteFavourite(userId, cardId) {
    const deletedCount = await Favorite.destroy({ where: { userId, cardId } });
    return deletedCount;
  }

  static async getUserFavourites() {
    const favourites = await User.findAll();
    const result = favourites.map((el) => el.get({ plain: true }));
    return result;
  }

  static async checkIsFavourite(id) {
    const favourite = await Favorite.findByPk(id);
    const result = favourite.get({ plain: true });
    return result;
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
