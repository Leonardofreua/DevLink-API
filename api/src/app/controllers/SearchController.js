import Dev from '../models/Dev';

import parseArrayObjectsToArrayStrings from '../utils/parseArrayObjectsToArrayStrings';

class SearchController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const { techs } = req.body;
    const { latitude, longitude } = req.query;

    const resultsPerPage = 10;

    let searchCriteria = {};

    if (techs) {
      searchCriteria = {
        techs: {
          $in: parseArrayObjectsToArrayStrings(techs),
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
      };
    } else {
      searchCriteria = {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      };
    }

    const dev = await Dev.find(searchCriteria)
      .populate('file', 'name path file_url')
      .skip((page - 1) * resultsPerPage)
      .limit(resultsPerPage);

    const numOfDevs = await Dev.count(searchCriteria);

    res.header('X-Total-Count', numOfDevs);

    return res.json({ dev });
  }

  async show(req, res) {
    const { id } = req.params;

    const { name, bio, avatar_url, techs, socialMedia, file } = await (
      await Dev.findById(id).populate('file', 'name path file_url')
    ).execPopulate();

    return res.json({
      name,
      bio,
      avatar_url,
      techs,
      socialMedia,
      file,
    });
  }
}

export default new SearchController();
