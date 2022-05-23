"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Card extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      front: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 10000],
            msg: 'O campo de do flashcard da frente deve ser preenchido',
          },
        },
      },
      back: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 10000],
            msg: 'O campo de do flashcard de trás deve ser preenchido',
          },
        },
      },
      study_date: {
        type: _sequelize2.default.DATE,
        defaultValue: '',
        validate: {
          isDate: true,
        },
      },
      current_count_study: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: true,
        },
      },
      next_study: {
        type: _sequelize2.default.DATE,
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
} exports.default = Card;
