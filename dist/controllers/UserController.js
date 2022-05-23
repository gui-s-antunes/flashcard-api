"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);

      const { id, name, email } = novoUser;

      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, name, email } = user;

      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário com tal id não existe'],
        });
      }

      const novosDados = await user.update(req.body); // = await user.update(req.body)

      const { id, name, email } = novosDados;

      return res.json({ id, name, email });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário com tal id não existe'],
        });
      }

      await user.destroy();
      return res.json(null); // não precisa, mas o airbnb vai reclamar se não tiver return
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new UserController();
