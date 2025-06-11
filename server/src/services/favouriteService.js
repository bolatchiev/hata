const { Favorite, Card, User } = require('../../db/models');

class FavoriteService {
  static async addFavourites(userId, cardId) {
    try {
      const existingFavourite = await Favorite.findOne({
        where: { userId, cardId },
      });

      if (existingFavourite) {
        return {
          statusCode: 400,
          message: 'Это объявление уже в избранном',
          error: 'DUPLICATE_FAVOURITE',
        };
      }

      const favourite = await Favorite.create({ userId, cardId });
      return {
        statusCode: 200,
        message: 'Добавлено в избранное',
        data: favourite,
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: 'Ошибка сервера при добавлении в избранное',
        error: err.message,
      };
    }
  }

  static async deleteFavourites(userId, cardId) {
    try {
      const deletedCount = await Favorite.destroy({
        where: { userId, cardId },
      });

      if (!deletedCount) {
        return {
          statusCode: 404,
          message: 'Объявление не найдено в избранном',
          error: 'NOT_FOUND',
        };
      }

      return {
        statusCode: 200,
        message: 'Удалено из избранного',
        data: { success: true },
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: 'Ошибка сервера при удалении из избранного',
        error: err.message,
      };
    }
  }

  static async getUserFavourites(userId) {
    try {
      const favourites = await Favorite.findAll({
        where: { userId },
        include: [
          {
            model: Card,
            as: 'card',
            include: [{ model: User, as: 'userPublisher' }],
          },
        ],
      });

      return {
        statusCode: 200,
        message: 'Список избранного получен',
        data: favourites.map((fav) => fav.card),
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: 'Ошибка сервера при получении избранного',
        error: err.message,
      };
    }
  }

  static async checkIsFavourite(userId, cardId) {
    try {
      const favourite = await Favorite.findOne({
        where: { userId, cardId },
      });

      return {
        statusCode: 200,
        message: 'Проверка статуса избранного',
        data: { isFavourite: !!favourite },
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: 'Ошибка сервера при проверке избранного',
        error: err.message,
      };
    }
  }
}

module.exports = FavoriteService;
