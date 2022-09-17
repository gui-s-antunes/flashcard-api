"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path'); var _path2 = _interopRequireDefault(_path);

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _cardRoutes = require('./routes/cardRoutes'); var _cardRoutes2 = _interopRequireDefault(_cardRoutes);
var _deckRoutes = require('./routes/deckRoutes'); var _deckRoutes2 = _interopRequireDefault(_deckRoutes);

_dotenv2.default.config({ path: _path2.default.join(__dirname, '../.env') }); // pm2 needs the env file path

const whiteList = [ // origens permitidas
  // 'http://34.151.230.126',
  'http://localhost:3001',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || whiteList.indexOf(origin) !== -1) { // vazio (ex: insonmia) ou na whiteList
      callback(null, true); // deu tudo certo
    } else {
      callback(new Error('Not Allowed by CORS')); // fora das permissões
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    // this.app.use(helmet()); // real app https
    this.app.use(_helmet2.default.call(void 0, { contentSecurityPolicy: false })); // dev step with http
    this.app.use(_expressdelay2.default.call(void 0, 2000));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/cards/', _cardRoutes2.default);
    this.app.use('/decks/', _deckRoutes2.default);
  }
}

exports. default = new App().app;
