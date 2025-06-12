const { Card, User } = require('../../db/models');

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
    console.log('232323232', data);
    const card = await Card.findByPk(id);
    if (card) {
      card.photo = data.photo;
      console.log('3333333333333333333', card);
      card.description = data.description;
      card.price = data.price;
      card.type = data.type;
      card.city = data.city;
      card.flors = data.flors;
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
