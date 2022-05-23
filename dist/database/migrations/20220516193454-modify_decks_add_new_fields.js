"use strict";module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'decks',
        'created_at',
        {
          type: Sequelize.DATE,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'decks',
        'updated_at',
        {
          type: Sequelize.DATE,
          allowNull: true,
        },
      ),
    ]);
  },

  down: () => {},
};
