// import request from 'superagent';
import jwt from 'jsonwebtoken';

import Dev from '../models/Dev';

import { githubOAuth, githubAPI } from '../services/api';
import authConfig from '../../config/auth';

class SessionGithubController {
  async store(req, res) {
    const { requestToken } = req.body;

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
      bio,
      avatar_url,
      html_url,
    } = apiResponse.data;

    const dev = await Dev.findOne()
      .or([{ email }, { github_username: login }])
      .populate('file', 'name path file_url')
      .exec();

    let result = {};

    if (dev) {
      const { _id, location, file } = dev;

      result = {
        dev: {
          _id,
          name: dev.name,
          email,
          location,
          avatar: file || avatar_url,
        },
        token: jwt.sign({ _id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      };
    } else {
      const socialMedia = {
        github_url: html_url,
      };

      const { _id, file } = await Dev.create({
        name,
        email,
        github_username: login,
        company,
        bio,
        avatar_url,
        socialMedia,
        login_with_github: true,
      });

      result = {
        dev: {
          _id,
          name,
          email,
          avatar: file || avatar_url,
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
