const RateService = require('../services/Rate.service');
const formatResponse = require('../utils/formatResponse');

class RateController {
  static async getAllRates(req, res) {
    try {
      const rates = await RateService.getAll();

      if (rates.length === 0) {
        return res.status(200).json(formatResponse(200, 'No rates found', []));
      }

      res.status(200).json(formatResponse(200, 'success', rates, 'success'));
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async getRateById(req, res) {
    const { id } = req.params;

    try {
      const rate = await RateService.getById(+id);

      if (!rate) {
        return res.status(404).json(formatResponse(404, `Rate with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, 'success', rate));
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async createOrUpdate(req, res) {
    const { hataId } = req.params;
    const userId = res.locals.user.id;
    const { mark } = req.body;
    try {
      const rate = await RateService.createOrUpdate({ hataId, userId, mark });
      return res.status(201).json(formatResponse(201, 'success', rate));
    } catch (err) {
      console.error(err);
      return res.status(500).json(formatResponse(500, 'Internal server error'));
    }
  }

  static async getByHata(req, res) {
    const { hataId } = req.params;
    try {
      const rates = await RateService.getAllRatesForHata(hataId);
      return res.status(200).json(formatResponse(200, 'success', rates));
    } catch (err) {
      console.error(err);
      return res.status(500).json(formatResponse(500, 'Internal server error'));
    }
  }
}

module.exports = RateController;