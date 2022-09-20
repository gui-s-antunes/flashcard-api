"use strict";module.exports = {
  async up(queryInterface) {
    return queryInterface.dropTable('decks');
  },

  async down() {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
