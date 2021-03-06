'use strict';
const {
  Model
} = require('sequelize');
const paquetebodega = require('./paquetebodega');
module.exports = (sequelize, DataTypes) => {
  class PaqueteSava extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PaqueteBodega,{foreignKey:'codigoSava'})
      this.belongsTo(models.Cliente,{foreignKey:'usuario'})
    }
  }
  PaqueteSava.init({
    codigoSava: DataTypes.STRING,
    estado: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    fechaSalida: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PaqueteSava',
  });
  return PaqueteSava;
};