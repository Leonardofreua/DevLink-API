import Dev from '../models/Dev';

import parseStringAsArray from '../utils/parseStringAsArray';

class DevController {
  async store(req, res) {
    const { name, email, password, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ email });

    if (devExists) {
      return res.status(400).json({ error: 'This email is already in use.' });
    }

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      name,
      email,
      password,
      techs: parseStringAsArray(techs),
      location,
    });

    return res.json(dev);
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new DevController();
