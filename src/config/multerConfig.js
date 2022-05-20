import multer from 'multer';
import { extname, resolve } from 'path'; // extname = extensao do file

// num aleatório entre 10000 e 20000
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    // mimetype vai pegar e extensão do file de forma segura

    return cb(null, true); // só pra retornar ao dar certo
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images')); // cb(erros, caminho)
      // cb é callback, file é o arquivo e req é a requisição que veio
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // gerando nome a partir de timestamp
      // vai gerar nome com timestamp + numero aleatorio + extensão do arquivo
    },
  }),
};
