const CardService = require('../services/Card.service');
const { formatResponse } = require('../utils/formatResponse');

class CardController {
  static async getAllCards(req, res) {
    try {
      const cards = await CardService.getAll();
      console.log(cards);
      if (cards.length === 0) {
        return res
          .status(400)
          .json(formatResponse({ statusCode: 400, message: 'No cards found' }));
      }
      return res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: cards }));
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse({ statusCode: 500, message: 'Server error' }));
    }
  }

  static async getCardById(req, res) {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res
        .status(400)
        .json(formatResponse({ statusCode: 400, message: 'Invalid ID' }));
    }

    try {
      const card = await CardService.getById(id);
      if (!card) {
        return res
          .status(404)
          .json(
            formatResponse({ statusCode: 404, message: `Card with id ${id} not found` }),
          );
      }
      res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: card }));
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse({ statusCode: 500, message: 'Server error' }));
    }
  }

  static async updateCard(req, res) {
    const { id } = req.params;
    const taskData = req.body;
    console.log('%%%%%%%%%%%%%', taskData);

    try {
      const updatedCard = await CardService.update(id, taskData);
      if (!updatedCard) {
        return res.status(404).json(
          formatResponse({
            statusCode: 404,
            message: `Card with id ${id} not found and can't be updated`,
          }),
        );
      }
      return res
        .status(200)
        .json(formatResponse({ statusCode: 200, message: 'success', data: updatedCard }));
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse({ statusCode: 500, message: 'Server error' }));
    }
  }

  static async deleteCard(req, res) {
    const { id } = req.params;
    const user = res.locals;
    if (user.isAdmin === false) {
      return res.status(403).json(
        formatResponse({
          statusCode: 403,
          message: 'Ты не админ',
        }),
      );
    }

    try {
      const cardToDelete = await CardService.delete(+id);
      if (!cardToDelete) {
        return res
          .status(404)
          .json(
            formatResponse({ statusCode: 404, message: `Card with id ${id} not found` }),
          );
      }

      return res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Card successfully deleted',
          data: cardToDelete,
        }),
      );
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse({ statusCode: 500, message: 'Server error' }));
    }
  }

  static async createCard(req, res) {
    const data = req.body;
    try {
      const createdCard = await CardService.create(data);

      return res.status(200).json(
        formatResponse({
          statusCode: 200,
          message: 'Card successfully created',
          data: createdCard,
        }),
      );
    } catch ({ message }) {
      console.error(message);
      res.status(500).json(formatResponse({ statusCode: 500, message: 'Server error' }));
    }
  }
}

module.exports = CardController;
