import * as Yup from 'yup';

import Dev from '../models/Dev';

import { parseArrayObjectsToArrayString } from '../utils/parseTechs';

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
      techs: Yup.array().required(),
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
        techs: parseArrayObjectsToArrayString(techs),
      });

      return res.json(dev);
    }
    return res.status(400).json({ error: 'Validation fails' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      bio: Yup.string().max(160),
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
      techs: Yup.array().of(
        Yup.object().shape({
          value: Yup.string(),
          label: Yup.string(),
        })
      ),
      socialMedia: Yup.object().shape({
        github_url: Yup.string(),
        linkedin_url: Yup.string(),
        youtube_url: Yup.string(),
        medium_url: Yup.string(),
        twitter_url: Yup.string(),
        website_url: Yup.string(),
      }),
      latitude: Yup.string(),
      longitude: Yup.string(),
    });

    if (await schema.isValid(req.body)) {
      const { email, oldPassword, techs, latitude, longitude } = req.body;

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

      const parsedTechs = parseArrayObjectsToArrayString(techs);

      await Dev.update(
        { _id: req.devId },
        {
          $set: req.body,
          location: Object.keys(location).length > 0 ? location : undefined,
          techs: parsedTechs,
        }
      );

      const {
        _id,
        name,
        bio,
        socialMedia,
        avatar_url,
        file,
      } = await Dev.findById(req.devId)
        .populate('file', 'name path file_url')
        .exec();

      return res.json({
        _id,
        name,
        email,
        bio,
        techs: parsedTechs,
        location,
        socialMedia,
        avatar: file || avatar_url,
      });
    }
    return res.status(400).json({ error: 'Validation fails' });
  }
}

export default new DevController();
