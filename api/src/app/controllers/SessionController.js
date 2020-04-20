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

      const dev = await Dev.findOne({ email }).populate(
        'file',
        'name path file_url'
      );

      if (!dev) {
        return res.status(401).json({ error: 'Dev not found.' });
      }

      if (!(await dev.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match.' });
      }

      const { _id, name, avatar_url, file } = dev;

      return res.json({
        dev: {
          _id,
          name,
          email,
          avatar_url,
          file,
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
