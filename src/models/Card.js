import Sequelize, { Model } from 'sequelize';

export default class Card extends Model {
  static init(sequelize) {
    super.init({
      front: {
        type: Sequelize.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 10000],
            msg: 'O campo de do flashcard da frente deve ser preenchido',
          },
        },
      },
      back: {
        type: Sequelize.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 10000],
            msg: 'O campo de do flashcard de trás deve ser preenchido',
          },
        },
      },
      study_date: {
        type: Sequelize.DATE,
        defaultValue: '',
        validate: {
          isDate: true,
        },
      },
      current_count_study: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: true,
        },
      },
      next_study: {
        type: Sequelize.DATE,
        defaultValue: '',
        validate: {
          isDate: true,
        },
      },
    }, {
      sequelize,
      tableName: 'cards',
    });
  }

  static associate(models) {
    this.belongsTo(models.Deck, { foreignKey: 'deck_id' });
  }
}
