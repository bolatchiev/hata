'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          cardId: 1,
          userId: 1,
          review: 'Отличная квартира! Не было тараканов и наймодатель супер!',
        },
        {
          cardId: 1,
          userId: 2,
          review: 'Круто! хата класс! Все понравилась, подружились с тараканами)',
        },
        {
          cardId: 2,
          userId: 3,
          review:
            'Супер! Правда соседи устроили мордобой, но мне понравилось, впечатления супер!',
        },
        {
          cardId: 3,
          userId: 1,
          review:
            'Пойдет. Не то, чтобы понравилось, но я нашла кусок сыра за диваном, поэла и ладно',
        },
        {
          cardId: 4,
          userId: 2,
          review:
            'Неплохо. Теперь у меня есть домашняя крыса, спасибо за животное! Ставлю 5 звезд!',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
