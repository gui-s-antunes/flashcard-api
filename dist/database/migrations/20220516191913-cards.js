"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('cards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      front: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      back: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      study_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      current_count_study: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      next_study: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deck_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'decks',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('cards');
  },
};
