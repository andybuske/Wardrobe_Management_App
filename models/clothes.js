'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clothes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clothes.belongsTo(models.Owner, { foreignKey: "owner_id" });
    }
  };
  Clothes.init({
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    length: DataTypes.STRING,
    color: DataTypes.STRING,
    style: DataTypes.STRING,
    notes: DataTypes.STRING,
    last_worn: DataTypes.DATE,
    owner_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Clothes',
  });
  return Clothes;
};