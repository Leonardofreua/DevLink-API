import Dev from '../models/Dev';

class DevController {
  async store(req, res) {
    const { name, email, password, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ email });

    if (devExists) {
      return res.status(400).json({ error: 'This email is already in use.' });
    }

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      name,
      email,
      password,
      github_username: '',
      bio: '',
      avatar_url: '',
      techs: techsArray,
      location,
    });

    return res.json(dev);
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new DevController();
