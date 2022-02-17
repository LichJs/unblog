import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const isDev = import.meta.env.DEV;
const token = import.meta.env.VITE_TOKEN;
// Authorization: `token ${import.meta.env.VITE_TOKEN}`,

const requestConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 3000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
};

// 如果有token 那么就带上token 进行发请求
token && (requestConfig.headers!.Authorization = `token ${token}`);

// 本地开发时可能因为网络不好 使用代理进行转发
isDev &&
  (requestConfig.proxy = {
    host: '127.0.0.1',
    port: 7890,
  });

export const request = axios.create(requestConfig);
