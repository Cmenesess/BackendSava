'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaqueteBodegas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroTrackeo: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      codigoSava:{
        type: Sequelize.STRING,
        references:{
          model:'PaqueteSavas',
          key:'codigoSava'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      usuario:{
        type: Sequelize.INTEGER,
        references:{
          model:'Clientes',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      fechaLLegada: {
        type: Sequelize.DATE
      },
      peso: {
        type: Sequelize.FLOAT
      },
      foto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaqueteBodegas');
  }
};