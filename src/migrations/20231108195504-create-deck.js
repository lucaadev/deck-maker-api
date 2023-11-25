'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      cards: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP()'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP()'),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('decks');
  }
};