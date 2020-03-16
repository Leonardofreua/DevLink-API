import Dev from '../models/Dev';

class DevController {
  async store(req, res) {
    const { name, email, password, techs } = req.body;

    const devExists = await Dev.findOne({ email });

    if (devExists) {
      return res.status(400).json({ error: 'This email is already in use.' });
    }

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
      name,
      email,
      password,
      github_username: '',
      bio: '',
      avatar_url: '',
      techs: techsArray,
    });

    return res.json(dev);
  }
}

export default new DevController();
