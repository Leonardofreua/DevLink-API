import Dev from '../models/Dev';

import parseStringAsArray from '../utils/parseStringAsArray';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const devs = await Dev.find({
      techs: {
        $in: parseStringAsArray(techs),
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs });
  }
}

export default new SearchController();
