'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data.init({
    Div: DataTypes.STRING,
    Season: DataTypes.STRING,
    Date: DataTypes.DATE,
    HomeTeam: DataTypes.STRING,
    AwayTeam: DataTypes.STRING,
    FTHG: DataTypes.INTEGER,
    FTAG: DataTypes.INTEGER,
    FTR: DataTypes.STRING,
    HTHG: DataTypes.INTEGER,
    HTAG: DataTypes.INTEGER,
    HTR: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};