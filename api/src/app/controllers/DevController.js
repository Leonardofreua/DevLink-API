import * as Yup from 'yup';

import Dev from '../models/Dev';

import parseStringAsArray from '../utils/parseStringAsArray';

class DevController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      techs: Yup.string().required(),
    });

    if (await schema.isValid(req.body)) {
      const { name, email, password, techs } = req.body;

      const devExists = await Dev.findOne({ email });

      if (devExists) {
        return res.status(400).json({ error: 'This email is already in use.' });
      }

      const dev = await Dev.create({
        name,
        email,
        password,
        techs: parseStringAsArray(techs),
      });

      return res.json(dev);
    }
    return res.status(400).json({ error: 'Validation fails' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      techs: Yup.string(),
      latitude: Yup.number(),
      longitude: Yup.number(),
    });

    if (await schema.isValid(req.body)) {
      const { email, oldPassword, latitude, longitude } = req.body;

      const dev = await Dev.findById(req.devId);

      if (!dev) {
        return res.status(401).json({ error: 'Dev not found.' });
      }

      let location = {};

      if (latitude && longitude) {
        location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };
      }

      if (email && email !== dev.email) {
        const devExists = await Dev.findOne({ email });

        if (devExists) {
          return res.status(400).json({ error: 'Dev already exists.' });
        }
      }

      if (oldPassword && !(await dev.checkPassword(oldPassword))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      await Dev.update(
        { _id: req.devId },
        {
          $set: req.body,
          location: Object.keys(location).length > 0 ? location : undefined,
        }
      );

      const { _id, name, avatar_url, file } = await Dev.findById(req.devId)
        .populate('file', 'name path file_url')
        .exec();

      return res.json({
        _id,
        name,
        email,
        avatar: file || avatar_url,
      });
    }
    return res.status(400).json({ error: 'Validation fails' });
  }
}

export default new DevController();
