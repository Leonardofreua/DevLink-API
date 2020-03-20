import axios from 'axios';

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
});

export const githubOAuth = axios.create({
  baseURL: 'https://github.com/login/oauth/access_token',
});
