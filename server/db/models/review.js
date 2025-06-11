'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.Card, { foreignKey: 'cardId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Review.init(
    {
      cardId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      review: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Review',
    },
  );
  return Review;
};
