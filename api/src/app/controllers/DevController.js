import Dev from '../models/Dev';

import parseStringAsArray from '../utils/parseStringAsArray';

class DevController {
  async store(req, res) {
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

  async update(req, res) {
    const { email, oldPassword, latitude, longitude } = req.body;

    const dev = await Dev.findById(req.devId);

    if (!dev) {
      return res.status(401).json({ error: 'Dev not found.' });
    }

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    if (email && email !== dev.email) {
      const devExists = await Dev.findOne({ email });

      if (devExists) {
        return res.status(400).json({ error: 'Dev already exists.' });
      }
    }

    if (oldPassword && !(await dev.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { _id, name } = await Dev.findByIdAndUpdate(
      req.devId,
      {
        $set: req.body,
        location,
      },
      { new: true }
    );

    return res.json({
      _id,
      name,
      email,
    });
  }
}

export default new DevController();
