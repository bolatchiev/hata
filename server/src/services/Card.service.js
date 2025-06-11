const { Card, User } = require('../db/models');

class CardService {
  static async getAll() {
    return await Card.findAll({
      include: [
        {
          model: User,
          as: 'userFavorites',
          through: { attributes: [] },
        },
        {
          model: User,
          as: 'userPublisher',
          attributes: ['name'],
        },
      ],
    });
  }

  static async getById(id) {
    return await Card.findByPk(id, {
      include: [
        {
          model: User,
          as: 'userPublisher',
          attributes: ['name'],
        },
        {
          model: User,
          as: 'userFavorites',
          through: { attributes: [] },
        },
      ],
    });
  }

  static async create(data) {
    return await Card.create(data);
  }

  static async update(id, data) {
    const card = await Card.findByPk(id);
    if (card) {
      card.title = data.title;
      card.city = data.city;
      card.length = data.length;
      card.mapImg = data.mapImg;
      await card.save();
    }
    return card;
  }

  static async delete(id) {
    const card = await Card.findByPk(id);
    if (card) {
      await card.destroy();
    }
    return card;
  }
}

module.exports = CardService;
