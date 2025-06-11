'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Favorite, Rate, Review }) {
      this.belongsTo(User, { foreignKey: 'userId', as: 'userPublisher' });
      this.hasMany(Rate, { foreignKey: 'cardId', as: 'rates' });
      this.hasMany(Review, { foreignKey: 'cardId', as: 'reviews' });
      this.hasMany(Favorite, { foreignKey: 'cardId', as: 'favorites' });
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
