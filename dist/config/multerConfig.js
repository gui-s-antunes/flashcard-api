"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); // extname = extensao do file

// num aleatório entre 10000 e 20000
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    // mimetype vai pegar e extensão do file de forma segura

    return cb(null, true); // só pra retornar ao dar certo
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); // cb(erros, caminho)
      // cb é callback, file é o arquivo e req é a requisição que veio
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`); // gerando nome a partir de timestamp
      // vai gerar nome com timestamp + numero aleatorio + extensão do arquivo
    },
  }),
};
