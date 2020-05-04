import Dev from '../models/Dev';

import { parseStringAsArray } from '../utils/parseTechs';

class SearchController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const { techs, latitude, longitude } = req.query;

    const resultsPerPage = 10;

    let searchCriteria = {};
    let techsArray = [];

    if (techs && longitude && latitude) {
      techsArray = parseStringAsArray(techs);
      searchCriteria = {
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 20000,
          },
        },
      };
    } else if (longitude && latitude) {
      searchCriteria = {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 20000,
          },
        },
      };
    } else {
      techsArray = parseStringAsArray(techs);
      searchCriteria = {
        techs: {
          $in: techsArray,
        },
      };
    }

    let dev = {};

    if (Object.keys(searchCriteria).length > 0) {
      dev = await Dev.find(searchCriteria)
        .populate('file', 'name path file_url')
        .skip((page - 1) * resultsPerPage)
        .limit(resultsPerPage)
        .exec();

      // const numOfDevs = await Dev.count(searchCriteria);

      // res.header('X-Total-Count', numOfDevs);
    }

    return res.json(dev);
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
