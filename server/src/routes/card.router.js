const cardRouter = require('express').Router();
const CardController = require('../controllers/Card.controller');

cardRouter
  .get('/', CardController.getAllCards)
  .get('/:id', CardController.getCardById)
  .post('/', CardController.createCard)
  .put('/:id', CardController.updateCard)
  .delete('/:id', CardController.deleteCard);

module.exports = cardRouter;
