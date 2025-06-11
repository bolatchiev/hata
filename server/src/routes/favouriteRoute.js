const favouriteRouter = require('express').Router();
const favouriteController = require('../controllers/favouriteController');
const verifyAccessToken = require('../middlewares/verifyAccesToken');

favouriteRouter
  .get('/', favouriteController.getUserFavourites)
  .get('/:id', favouriteController.checkIsFavourite)
  .post('/:id', favouriteController.addToFavourites)
  .delete('/:id', favouriteController.removeFromFavourites)
  .post('/switch/:cardId', verifyAccessToken, favouriteController.switchFavorite);

module.exports = favouriteRouter;
