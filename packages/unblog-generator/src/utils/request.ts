import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const isDev = import.meta.env.DEV;

const requestConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 3000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${import.meta.env.VITE_TOKEN}`,
  },
};

// 本地开发时可能因为网络不好 使用代理进行转发
isDev &&
  (requestConfig.proxy = {
    host: '127.0.0.1',
    port: 7890,
  });

export const request = axios.create(requestConfig);
