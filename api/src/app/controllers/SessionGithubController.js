// import request from 'superagent';
import jwt from 'jsonwebtoken';

import Dev from '../models/Dev';

import { githubOAuth, githubAPI } from '../services/api';
import authConfig from '../../config/auth';

class SessionGithubController {
  async store(req, res) {
    const requestToken = req.query.code;

    /**
     * Logging into Github with OAuth.
     */
    const oauthResponse = await githubOAuth({
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      data: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: requestToken,
      },
    });

    /**
     * Using the access token to access the API.
     */
    const apiResponse = await githubAPI.get('/user', {
      headers: {
        // Include the token in the Authorization header
        Authorization: `token ${oauthResponse.data.access_token}`,
      },
    });

    const {
      name,
      login,
      email,
      company,
      location,
      bio,
      avatar_url,
    } = apiResponse.data;

    const dev = await Dev.findOne().or([{ email }, { github_username: login }]);

    let result = {};

    if (dev) {
      const { _id } = dev;

      result = {
        dev: {
          _id,
          name: dev.name,
          email,
        },
        token: jwt.sign({ _id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      };
    } else {
      const newDev = await Dev.create({
        name,
        email,
        github_username: login,
        company,
        github_location: location,
        bio,
        avatar_url,
        login_with_github: true,
      });

      const { _id } = newDev;

      result = {
        dev: {
          _id,
          name,
          email,
        },
        token: jwt.sign({ _id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      };
    }

    return res.json(result);
  }
}

export default new SessionGithubController();
