import * as Yup from 'yup';

import Dev from '../models/Dev';

class LocationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      latitude: Yup.string(),
      longitude: Yup.string(),
    });

    if (await schema.isValid(req.body)) {
      const { longitude, latitude, maxDistance } = req.body;

      let coordinates = {};

      if (latitude && longitude) {
        coordinates = {
          type: 'Point',
          coordinates: [longitude, latitude],
          maxDistance,
        };
      }

      const { location } = await Dev.findByIdAndUpdate(
        { _id: req.devId },
        {
          location:
            Object.keys(coordinates).length > 0 ? coordinates : undefined,
        },
        { new: true }
      );

      return res.json({ location });
    }
    return res.status(400).json({ error: 'Validation fails' });
  }
}

export default new LocationController();
