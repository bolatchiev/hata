const { Rate } = require('../db/models');

class RateService {
  static async createOrUpdate({ hataId, userId, mark }) {
    // если уже оценивал — обновляем, иначе создаём
    const [rate] = await Rate.upsert(
      { hataId, userId, mark },
      { where: { hataId, userId }, returning: true },
    );
    return rate;
  }

  static async getAllRatesForHata(hataId) {
    return Rate.findAll({ where: { hataId } });
  }

  static async getAll() {
    return await Rate.findAll({
      attributes: ['hataId', 'userId', 'mark'],
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
