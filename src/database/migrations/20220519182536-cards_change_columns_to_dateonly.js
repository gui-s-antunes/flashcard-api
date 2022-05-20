module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('cards', 'study_date', {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }),
      queryInterface.changeColumn('cards', 'next_study', {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('cards', 'study_date', {
        type: Sequelize.DATE,
        allowNull: false,
      }),
      queryInterface.changeColumn('cards', 'next_study', {
        type: Sequelize.DATE,
        allowNull: false,
      }),
    ]);
  },
};
