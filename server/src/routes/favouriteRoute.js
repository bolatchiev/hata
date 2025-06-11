const favouriteRouter = require('express').Router();
const favouriteController = require('../controllers/favouriteController');
const verifyAccessToken = require('../middlewares/verifyAccesToken');

favouriteRouter
  .get('/', favouriteController.getAllFavoritesForTest)
  .get('/:userId', favouriteController.getUserFavorites)
  .get('/check/:userId/:cardId', favouriteController.checkIsFavourite)
  .post('/:id', favouriteController.addToFavourites)
  .delete('/:id', verifyAccessToken, favouriteController.removeFromFavourites)
  .post('/switch/:cardId', verifyAccessToken, favouriteController.switchFavorite);

module.exports = favouriteRouter;
