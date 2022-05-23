"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Deck = require('../models/Deck'); var _Deck2 = _interopRequireDefault(_Deck);
var _Card = require('../models/Card'); var _Card2 = _interopRequireDefault(_Card);

class DeckController {
  async index(req, res) {
    try {
      const decks = await _Deck2.default.findAll({
        where: { user_id: req.userId },
        attributes: ['id', 'name'],
        order: [['name', 'ASC'], [_Card2.default, 'id', 'DESC']],
        include: {
          model: _Card2.default,
          attributes: ['id', 'front', 'back', 'study_date', 'current_count_study', 'next_study'],
        },
      });
      // const decks = await Deck.findAll({
      //   where: { user_id: req.userId },
      // });
      return res.json(decks);
    } catch (e) {
      return console.log(e);
    }
  }

  async show(req, res) {
    try {
      // const deck = await Deck.findByPk(req.params.id);
      const deck = await _Deck2.default.findOne({
        where: {
          id: req.deckId,
          user_id: req.userId,
        },
        attributes: ['id', 'name'],
        order: [['name', 'ASC'], [_Card2.default, 'id', 'DESC']],
        include: {
          model: _Card2.default,
          attributes: ['id', 'front', 'back', 'study_date', 'current_count_study', 'next_study'],
        },
      });

      return res.json(deck);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const { name } = req.body;
      const user_id = req.userId;
      const newDeck = await _Deck2.default.create({ name, user_id });

      const { id } = newDeck;

      return res.json({ id, name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const deck = await _Deck2.default.findOne({
        where: {
          id: req.deckId,
          user_id: req.userId,
        },
      });

      if (!deck) {
        return res.status(400).json({
          errors: ['Deck not found'],
        });
      }

      const updatedDeck = await deck.update(req.body);
      const { name } = updatedDeck;
      return res.json({ name });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const deck = await _Deck2.default.findOne({
        where: {
          id: req.deckId,
          user_id: req.userId,
        },
      });

      if (!deck) {
        return res.status(400).json({
          errors: ['Deck not found'],
        });
      }

      deck.destroy();

      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new DeckController();
