"use strict";const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: { // registrar momentos de CRUD
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at', // o underscore converte, mas esses 2 não, por bugs
    updatedAt: 'updated_at', // ex: nomePessoa -> nome_pessoa
  },
  dialectOptions: {
    timezone: '-03:00',
  },
  timezone: '-03:00',
};
