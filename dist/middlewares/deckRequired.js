"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import Card from '../models/Card';
var _Deck = require('../models/Deck'); var _Deck2 = _interopRequireDefault(_Deck);

exports. default = async (req, res, next) => {
  // esse middleware vem depois de ver se o usuário ta logado
  // pegar o deck_id do body
  // ver se ele existe
  // procurar o deck com esse deck_id e ver se acha com o id do usuário logado
  const { deck_id } = req.params;

  if (!deck_id) {
    return res.status(401).json({
      errors: ['id do deck não foi passado'],
    });
  }

  try {
    const deck = await _Deck2.default.findOne({
      where: {
        id: deck_id,
        user_id: req.userId,
      },
    });

    if (!deck) {
      return res.status(401).json({
        errors: ['Algo de errado entre o id do deck e o usuário logado'],
      });
    }

    req.deckId = deck_id;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Parece que o id do deck não faz parte dos seus decks...'],
    });
  }
};
