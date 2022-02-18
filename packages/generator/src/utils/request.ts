import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { useStore } from '@/stores/github';

const store = useStore();

const isDev = import.meta.env.DEV;
const token = store.token;

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

const instance = axios.create(requestConfig);

// 请求请求拦截器

// 相应拦截器
instance.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

export const request = instance;
