'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
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
      image: {
        allowNull: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rarity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      life: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      attack: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      defense: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cardSuper: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      deckiD: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP()'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP()'),
        type: Sequelize.DATE
      }
    }, {
        timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  }
};