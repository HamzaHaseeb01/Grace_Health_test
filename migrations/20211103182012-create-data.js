'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Div: {
        type: Sequelize.STRING
      },
      Season: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATE
      },
      HomeTeam: {
        type: Sequelize.STRING
      },
      AwayTeam: {
        type: Sequelize.STRING
      },
      FTHG: {
        type: Sequelize.INTEGER
      },
      FTAG: {
        type: Sequelize.INTEGER
      },
      FTR: {
        type: Sequelize.STRING
      },
      HTHG: {
        type: Sequelize.INTEGER
      },
      HTAG: {
        type: Sequelize.INTEGER
      },
      HTR: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('data');
  }
};