'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rates', [
      {
        cardId: 1,
        userId: 1,
        mark: 5,
      },
      {
        cardId: 2,
        userId: 1,
        mark: 4,
      },
      {
        cardId: 3,
        userId: 2,
        mark: 4, // ← оставляем только эту запись
      },
      {
        cardId: 4,
        userId: 3,
        mark: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rates', null, {});
  },
};
