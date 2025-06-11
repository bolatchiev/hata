const RateController = require('../controllers/Rate.controller');
const verifyAccessToken = require('../middlewares/verifyAccesToken');

const rateRouter = require('express').Router();

rateRouter
  .get('/', RateController.getAllRates)
  .get('/:id', RateController.getRateById)
  .post('/:cardId', verifyAccessToken, RateController.createOrUpdate)
  .get('/:cardId', RateController.getByCard);
//   .post('/', RateController.createRate)
//   .put('/:id', RateController.updateRate)
//   .delete('/:id', RateController.deleteRate);
//
module.exports = rateRouter;
