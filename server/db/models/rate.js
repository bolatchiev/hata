'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate(models) {
      this.belongsTo(models.Card, { foreignKey: 'cardId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Rate.init(
    {
      cardId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      mark: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Rate',
    },
  );
  return Rate;
};
