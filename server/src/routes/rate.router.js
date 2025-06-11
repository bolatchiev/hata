const RateController = require("../controllers/Rate.controller");

const rateRouter = require("express").Router();


rateRouter
  .get("/", RateController.getAllRates)
  .get("/:id", RateController.getRateById);
//   .post('/', RateController.createRate)
//   .put('/:id', RateController.updateRate)
//   .delete('/:id', RateController.deleteRate);
//
module.exports = rateRouter;