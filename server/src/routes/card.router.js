const cardRouter = require('express').Router();
const CardController = require('../controllers/Card.controller');
const RateController = require('../controllers/Rate.controller');
const ReviewController = require('../controllers/Review.controller');
const verifyAccessToken = require('../middlewares/verifyAccesToken');

//
cardRouter
  .get('/', CardController.getAllCards)
  .get('/:id', CardController.getCardById)
  .post('/', CardController.createCard)
  .put('/:id', CardController.updateCard)
  .delete('/:id', CardController.deleteCard);

// Рейтинги
cardRouter.post('/:cardId/rates', verifyAccessToken, RateController.createOrUpdate);
cardRouter.get('/:cardId/rates', RateController.getByCard);

// Отзывы
cardRouter.post('/:cardId/reviews', verifyAccessToken, ReviewController.add);
cardRouter.get('/:cardId/reviews', ReviewController.getByCard);

module.exports = cardRouter;
