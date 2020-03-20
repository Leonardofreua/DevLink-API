// import request from 'superagent';
import axios from 'axios';

import { githubOAuth } from '../services/api';

class SessionGithubController {
  async store(req, res) {
    const requestToken = req.query.code;

    const response = await githubOAuth({
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

    return res.json(response.data);
  }
}

export default new SessionGithubController();
