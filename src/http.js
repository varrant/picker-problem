/**
 * http配置
 */

import axios from 'axios';
import store from './store/store';
import * as types from './store/types';
import router from './router';

// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.baseURL = 'http://test-api.91suzhi.com';
axios.defaults.headers.common['Authorization'] = '5IgLzWzEVT5nHjMs5WCdNWE2CbCYWkzkyoqQPd_ZAaCiqBTP_q6TpBYsTqHBZy06T2BPl1fybmJstVG3xyGYlA';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return axios.Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return axios.Promise.reject(error.response.data);
  });

export default axios;
