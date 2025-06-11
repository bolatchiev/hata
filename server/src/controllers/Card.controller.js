const formatResponse = require("../utils/formatResponse");
const isValidId = require("../utils/isValidId");
const CardService = require("../services/Card.service");

class CardController {
  static async getAllCards(req, res) {
    try {
      const cards = await CardService.getAll();
      if (cards.length === 0) {
        return res
          .status(200)
          .json(formatResponse(200, "No cards found", [], "No cards found"));
      }
      return res.status(200).json(formatResponse(200, "success", cards));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getCardById(req, res) {
    const { id } = req.params;
    if (!isValidId(+id)) {
      return res
        .status(400)
        .json(formatResponse(400, "Invalid id", id, "Invalid id"));
    }

    try {
      const card = await CardService.getById(id);
      if (!card) {
        return res
          .status(404)
          .json(formatResponse(404, `Card with id ${id} not found`));
      }
      res.status(200).json(formatResponse(200, "success", card, "success"));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async updateCard(req, res) {
    const { id } = req.params;
    const { data } = req.body;

    if (!isValidId(+id)) {
      return res
        .status(400)
        .json(formatResponse(400, "Invalid id", null, "Invalid id"));
    }

    try {
      const updatedCard = await CardService.update(id, data);
      if (!updatedCard) {
        return res
          .status(404)
          .json(
            formatResponse(
              404,
              `Card with id ${id} not found and can't be updated`
            )
          );
      }
      return res
        .status(200)
        .json(formatResponse(200, "success", updatedCard, "success"));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteCard(req, res) {
    const { id } = req.params;

    try {
      const cardToDelete = await CardService.delete(+id);
      if (!cardToDelete) {
        return res
          .status(404)
          .json(formatResponse(404, `Card with id ${id} not found`));
      }

      return res
        .status(200)
        .json(
          formatResponse(
            200,
            "Card successfully deleted",
            cardToDelete,
            "Card successfully deleted"
          )
        );
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createCard(req, res) {
    const data = req.body;
    try {
      const createdCard = await CardService.create(data);

      return res
        .status(200)
        .json(
          formatResponse(
            200,
            "Card successfully created",
            createdCard,
            "Card successfully created"
          )
        );
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = CardController;
