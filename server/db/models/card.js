'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Favorite, Rate, Review }) {
      this.belongsTo(User, { foreignKey: 'userId', as: 'userPublisher' });
      this.belongsToMany(User, {
        through: Rate,
        foreignKey: "cardId",
        as: "userRate",
      });
      this.belongsToMany(User, {
        through: Review,
        foreignKey: "cardId",
        as: "userReview",
      });
      this.belongsToMany(User, {
        through: Favorite,
        foreignKey: "cardId",
        as: "userFavorites",
      });
    }
  }
  Card.init(
    {
      photo: DataTypes.TEXT,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      type: DataTypes.STRING,
      city: DataTypes.STRING,
      flors: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
