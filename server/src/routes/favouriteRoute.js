const favouriteRouter = require('express').Router();
const favouriteController = require('../controllers/favouriteController');

favouriteRouter
  .get('/', favouriteController.getUserFavourites)
  .get('/check/:id', favouriteController.checkIsFavourite)
  .post('/:id', favouriteController.addToFavourites)
  .delete('/:id', favouriteController.removeFromFavourites);

module.exports = favouriteRouter;
