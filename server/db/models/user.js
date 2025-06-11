'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Favorite, Rate, Review }) {
      this.hasMany(Card, { foreignKey: 'userId', as: 'myPublishedCards' });
      this.hasMany(Rate, { foreignKey: 'userId', as: 'myRates' });
      this.hasMany(Review, { foreignKey: 'userId', as: 'myReviews' });
      this.hasMany(Favorite, { foreignKey: 'userId', as: 'myFavorites' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
