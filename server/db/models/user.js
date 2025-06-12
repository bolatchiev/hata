'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Favorite, Rate, Review }) {
      this.hasMany(Card, { foreignKey: 'userId', as: 'myPublishedCards' });

      this.belongsToMany(Card, {
        foreignKey: 'userId',
        through: Rate,
        as: 'myRatedCards',
      });

      this.belongsToMany(Card, {
        foreignKey: 'userId',
        through: Review,
        as: 'myReviewedCards',
      });
      this.belongsToMany(Card, {
        foreignKey: 'userId',
        through: Favorite,
        as: 'myFavoriteCards',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
