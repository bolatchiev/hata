const FavoriteService = require('../services/favouriteService');
const { formatResponse } = require('../utils/formatResponse');

class FavoriteController {
  static async addToFavourites(req, res) {
    try {
      const { id: cardId } = req.params;
      const { id: userId } = req.user;

      const result = await FavoriteService.addFavourite(userId, cardId);

      if (!result) {
        return res.status(400).json(
          formatResponse({
            statusCode: 400,
            message: 'Это объявление уже в избранном',
            error: 'Это объявление уже в избранном',
          }),
        );
      }

      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Добавлено в избранное',
          data: result,
        }),
      );
    } catch (error) {
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Ошибка сервера при добавлении в избранное',
          error: error.message,
        }),
      );
    }
  }

  static async removeFromFavourites(req, res) {
    try {
      const { id: cardId } = req.params;
      const { id: userId } = req.user;

      const result = await FavoriteService.deleteFavourite(userId, cardId);

      if (!result) {
        return res.status(404).json(
          formatResponse({
            statusCode: 404,
            message: 'Объявление не найдено в избранном',
            error: 'Объявление не найдено в избранном',
          }),
        );
      }

      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Удалено из избранного',
          data: { success: true },
        }),
      );
    } catch (error) {
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Ошибка сервера при удалении из избранного',
          error: error.message,
        }),
      );
    }
  }

  static async getUserFavourites(req, res) {
    try {
      const { id } = req.user;
      const result = await FavoriteService.getUserFavourites(id);

      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Список избранного',
          data: result,
        }),
      );
    } catch (error) {
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Ошибка сервера при получении избранного',
          error: error.message,
        }),
      );
    }
  }

  static async checkIsFavourite(req, res) {
    try {
      const { id } = req.params;
      const result = await FavoriteService.checkIsFavourite(id);

      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Статус избранного',
          data: { isFavourite: result },
        }),
      );
    } catch (error) {
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Ошибка сервера при проверке избранного',
          error: error.message,
        }),
      );
    }
  }

  static async switchFavorite(req, res) {
    const userId = res.locals.user.id;
    const { cardId } = req.params;

    try {
      const favoriteCard = await FavoriteService.isFavorite(userId, cardId);

      if (favoriteCard) {
        await FavoriteService.remove(userId, cardId);
        return res
          .status(200)
          .json({ statusCode: 200, message: 'Удалено из избранного' });
      }
      await FavoriteService.add(userId, cardId);
      return res.status(201).json({ statusCode: 201, message: 'Добавлено в избранное' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ statusCode: 500, error: 'Ошибка сервера' });
    }
  }
}

module.exports = FavoriteController;
