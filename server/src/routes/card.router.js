const router = require('express').Router();
const CardController = require('../controllers/Card.controller');
const RateController = require('../controllers/Rate.controller');
const ReviewController = require('../controllers/Review.controller');
const verifyAccessToken = require('../middleware/verifyAccessToken');
//
router
  .get('/', CardController.getAllCards)
  .get('/:id', CardController.getCardById)
  .post('/', CardController.createCard)
  .put('/:id', CardController.updateCard)
  .delete('/:id', CardController.deleteCard);

// Рейтинги
router.post('/:cardId/rates', verifyAccessToken, RateController.createOrUpdate);
router.get('/:cardId/rates', RateController.getByCard);

// Отзывы
router.post('/:cardId/reviews', verifyAccessToken, ReviewController.add);
router.get('/:cardId/reviews', ReviewController.getByCard);

module.exports = router;
