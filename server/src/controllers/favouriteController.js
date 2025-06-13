const FavoriteService = require('../services/favouriteService');
const { formatResponse } = require('../utils/formatResponse');

class FavoriteController {
  static async getAllFavoritesForTest(req, res) {
    try {
      const testFavoriteCards = await FavoriteService.getAllForTest();

      return res
        .status(200)
        .json({ statusCode: 200, message: 'Все избранные', data: testFavoriteCards });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Не получилось найти избранные' });
    }
  }

  static async addToFavourites(req, res) {
    try {
      const { cardId } = req.params;
      const userId = res.locals.user.id;

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
      const { cardId } = req.params;
      const userId = res.locals.user.id;

      if (!cardId || !userId) {
        return res.status(400).json(
          formatResponse({
            statusCode: 400,
            message: 'Некорректные параметры запроса',
            error: 'ID должны быть числами',
          }),
        );
      }

      const result = await FavoriteService.deleteFavourite(userId, cardId);

      if (result === 0) {
        return res.status(404).json(
          formatResponse({
            statusCode: 404,
            message: 'Объявление не найдено в избранном',
          }),
        );
      }

      return res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Удалено из избранного',
          data: result,
        }),
      );
    } catch (error) {
      console.error('Ошибка удаления избранного', error);
      return res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Ошибка сервера при удалении из избранного',
        }),
      );
    }
  }

  static async getUserFavorites(req, res) {
    const userId = res.locals.user.id;

    // Валидация userId
    if (!userId) {
      return res.status(400).json(
        formatResponse({
          statusCode: 400,
          message: 'Неверный ID пользователя',
          error: 'Некорректный формат ID пользователя',
        }),
      );
    }

    try {
      const favoriteCards = await FavoriteService.getFavoritesByUser(userId);

      return res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Избранные карточки получены',
          data: favoriteCards,
        }),
      );
    } catch (error) {
      console.error('Ошибка в getUserFavorites:', error);
      return res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Ошибка сервера',
          error: 'Внутренняя ошибка сервера',
        }),
      );
    }
  }

  static async checkIsFavourite(req, res) {
    try {
      const { cardId } = req.params;
      const userId = res.locals.user.id;

      if (!userId || !cardId) {
        return res.status(400).json(
          formatResponse({
            statusCode: 400,
            message: 'Не указаны userId или cardId',
          }),
        );
      }

      const result = await FavoriteService.checkIsFavourite(
        Number(userId),
        Number(cardId),
      );
      res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Статус избранного',
          data: { isFavourite: result },
        }),
      );
    } catch (error) {
      console.error('Ошибка поиска избранного', error);
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
