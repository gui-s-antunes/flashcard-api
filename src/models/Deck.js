import Sequelize, { Model } from 'sequelize';

export default class Deck extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 100],
            msg: 'Preencha o campo do nome entre 1 e 100 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.hasMany(models.Card, { foreignKey: 'deck_id' });
  }
}

// tem que fazer o belongsTo de user_id e hasOne de cards(talvez)
