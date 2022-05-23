"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Card = require('../models/Card'); var _Card2 = _interopRequireDefault(_Card);
var _Deck = require('../models/Deck'); var _Deck2 = _interopRequireDefault(_Deck);

const models = [_User2.default, _Card2.default, _Deck2.default]; // coloque cada model criado neste array!

const connection = new (0, _sequelize2.default)(_database2.default); // veja que as configs do database.js estão aqui!

models.forEach((model) => model.init(connection)); // o init que está la no Aluno.js!
models.forEach((model) => model.associate && model.associate(connection.models));
