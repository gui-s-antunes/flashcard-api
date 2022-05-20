module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('decks', 'create_at', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('decks', 'created_at', 'create_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
