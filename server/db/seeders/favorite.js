'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1,
        cardId: 2,
      },
      {
        userId: 2,
        cardId: 3,
      },
      {
        userId: 3,
        cardId: 3,
      },
      {
        userId: 4,
        cardId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};

// для коммита1234567788
