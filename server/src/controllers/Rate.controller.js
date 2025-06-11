const RateService = require('../services/Rate.service');
const {formatResponse} = require('../utils/formatResponse');

class RateController {
  static async getAllRates(req, res) {
    try {
      const rates = await RateService.getAll();

      if (rates.length === 0) {
        return res
          .status(200)
          .json(
            formatResponse({ statusCode: 200, message: 'No rates found', data: rates }),
          );
      }

      res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: rates }));
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(
        formatResponse({
          statusCode: 500,
          message: 'Internal server error',
          error: 'Internal server error',
        }),
      );
    }
  }

  static async getRateById(req, res) {
    const { id } = req.params;

    try {
      const rate = await RateService.getById(+id);

      if (!rate) {
        return res
          .status(404)
          .json(
            formatResponse({ statusCode: 404, message: `Rate with id ${id} not found` }),
          );
      }

      res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: rate }));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(
          formatResponse({
            statusCode: 500,
            message: 'Internal server error',
            error: 'Internal server error',
          }),
        );
    }
  }

  static async createOrUpdate(req, res) {
    const { cardId } = req.params;
    const userId = res.locals.user.id;
    const { mark } = req.body;
    try {
      const rate = await RateService.createOrUpdate({ cardId, userId, mark });
      return res
        .status(201)
        .json(formatResponse({ statusCode: 201, message: 'success', data: rate }));
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(
          formatResponse({
            statusCode: 500,
            message: 'Internal server error',
            error: 'Internal server error',
          }),
        );
    }
  }

  static async getByCard(req, res) {
    const { cardId } = req.params;
    try {
      const rates = await RateService.getAllRatesForCard(cardId);
      return res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: rates }));
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(
          formatResponse({
            statusCode: 500,
            message: 'Internal server error',
            error: 'Internal server error',
          }),
        );
    }
  }
}

module.exports = RateController;
