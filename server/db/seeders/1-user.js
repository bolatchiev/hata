'use strict';

const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jane',
        email: 'jane@jane.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: true,
      },
      {
        name: 'Bob',
        email: 'bob@bob.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: false,
      },
      {
        name: 'Jacob',
        email: 'jacob@jacob.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: false,
      },
      {
        name: 'Alice',
        email: 'alice@alice.com',
        password: await bcrypt.hash('123', 10),
        isAdmin: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
