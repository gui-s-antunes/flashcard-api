"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Funada Antes',
        email: 'funadaoFix@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ananácio',
        email: 'ana2xcio@email.com',
        password_hash: await bcryptjs.hash('6543123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Filopeldo',
        email: 'filopeldo@email.com',
        password_hash: await bcryptjs.hash('5423134', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {
  },
};
