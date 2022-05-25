import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas :p'],
      });
    }

    const user = await User.findOne({ where: { email } }); // where: { email: email}
    // email: email = email apenas. No caso, procuramos um valor onde chave email lá no bd é
    // valor com o valor de email passado no form aqui

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário com tal email inválido'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida :c'],
      });
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { name: user.name, id, email } }); // token: { <valor_token> }
  }
}

export default new TokenController();
