import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
  proxy: {
    host: '127.0.0.1',
    port: 7890,
  },
});
