const router = require("express").Router();
const RateController = require("../controllers/Rate.controller");

router
  .get("/", RateController.getAllRates)
  .get("/:id", RateController.getRateById);
//   .post('/', RateController.createRate)
//   .put('/:id', RateController.updateRate)
//   .delete('/:id', RateController.deleteRate);
//
module.exports = router;