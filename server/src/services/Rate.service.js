const { Rate } = require('../../db/models');

class RateService {
  static async createOrUpdate({ cardId, userId, mark }) {
    // если уже оценивал — обновляем, иначе создаём
    const [rate] = await Rate.upsert(
      { cardId, userId, mark },
      { where: { cardId, userId }, returning: true },
    );
    return rate;
  }

  static async getAllRatesForCard(cardId) {
    return Rate.findAll({ where: { cardId } });
  }

  static async getAll() {
    return await Rate.findAll({
      attributes: ['cardId', 'userId', 'mark'],
    });
  }

  static async getById(id) {
    return await Rate.findByPk(id);
  }

  static async create(data) {
    return await Rate.create(data);
  }

  static async update(id, data) {
    const rate = await this.getById(id);
    if (rate) {
      rate.title = data.title;
      rate.body = data.body;
      await rate.save();
    }
    return rate;
  }

  static async delete(id) {
    const rate = await this.getById(id);
    if (rate) {
      await rate.destroy();
    }
    return rate;
  }
}

module.exports = RateService;
