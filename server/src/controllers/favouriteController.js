const FavoriteService = require('../services/favouriteService');
const { formatResponse } = require('../utils/formatResponse');

class FavoriteController {
  static async addToFavourites(req, res) {
    const { id: cardId } = req.params;
    const { id: userId } = req.user;
    const result = await FavoriteService.addFavourites(userId, cardId);
    res.status(result.statusCode).json(formatResponse(result));
  }

  static async removeFromFavourites(req, res) {
    const { id: cardId } = req.params;
    const { id: userId } = req.user;
    const result = await FavoriteService.deleteFavourites(userId, cardId);
    res.status(result.statusCode).json(formatResponse(result));
  }

  static async getUserFavourites(req, res) {
    const { id: userId } = req.user;
    const result = await FavoriteService.getUserFavourites(userId);
    res.status(result.statusCode).json(formatResponse(result));
  }

  static async checkIsFavourite(req, res) {
    const { id: cardId } = req.params;
    const { id: userId } = req.user;
    const result = await FavoriteService.checkIsFavourite(userId, cardId);
    res.status(result.statusCode).json(formatResponse(result));
  }
}

module.exports = FavoriteController;
