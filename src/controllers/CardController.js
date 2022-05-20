import Card from '../models/Card';

class CardController {
  async index(req, res) {
    try {
      const card = await Card.findAll({
        where: { deck_id: req.deckId },
        attributes: ['id', 'front', 'back', 'study_date', 'current_count_study', 'next_study', 'deck_id'],
      });

      if (!card) {
        return res.status(400).json({
          errors: ['Card not found'],
        });
      }

      return res.json(card);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['id or deck id not provided'],
        });
      }

      const card = await Card.findOne({
        where: {
          id,
          deck_id: req.deckId,
        },
        attributes: ['id', 'front', 'back', 'study_date', 'current_count_study', 'next_study', 'deck_id'],
      });

      if (!card) {
        return res.status(400).json({
          errors: ['Card not found'],
        });
      }

      return res.json(card);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async store(req, res) {
    try {
      const {
        front, back, study_date, current_count_study, next_study,
      } = req.body;

      const deck_id = req.deckId;

      const newCard = await Card.create({
        front, back, study_date, current_count_study, next_study, deck_id,
      });

      // const newCard = await Card.create(req.body);

      return res.json(newCard);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id not found'],
        });
      }

      const card = await Card.findOne({
        where: {
          id,
          deck_id: req.deckId,
        },
      });

      if (!card) {
        return res.status(400).json({
          errors: ['Card not found'],
        });
      }

      card.destroy();

      return res.json(
        {
          apagado: true,
        },
      );
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id not found'],
        });
      }

      const card = await Card.findOne({
        where: {
          id: req.params.id,
          deck_id: req.deckId,
        },
      });

      if (!card) {
        return res.status(400).json({
          errors: ['Deck or Card not found)'],
        });
      }

      const updatedCard = await card.update(req.body);

      return res.json(updatedCard);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new CardController();
