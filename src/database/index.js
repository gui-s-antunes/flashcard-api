import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Card from '../models/Card';
import Deck from '../models/Deck';

const models = [User, Card, Deck]; // coloque cada model criado neste array!

const connection = new Sequelize(databaseConfig); // veja que as configs do database.js estão aqui!

models.forEach((model) => model.init(connection)); // o init que está la no Aluno.js!
models.forEach((model) => model.associate && model.associate(connection.models));
