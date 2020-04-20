import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import Dev from '../models/Dev';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (await schema.isValid(req.body)) {
      const { email, password } = req.body;

      const dev = await Dev.findOne({ email });

      if (!dev) {
        return res.status(401).json({ error: 'Dev not found.' });
      }

      if (!(await dev.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match.' });
      }

      const { _id, name } = dev;

      return res.json({
        dev: {
          _id,
          name,
          email,
        },
        token: jwt.sign({ _id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    }
    return res.status(400).json({ error: 'Validation fails' });
  }
}

export default new SessionController();
