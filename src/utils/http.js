import axios from 'axios';
import { notification } from 'antd';
import qs from 'qs';

axios.defaults.timeout = 5000;

//服务器使用
axios.defaults.baseURL = '/blogApi/';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // config.data = JSON.stringify(config.data);
    config.data = qs.stringify(config.data); // 转为formdata数据格式
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return config;
  },
  response => {
    if (response.status === 401) {
      notification.error({
        message: '登录已失效',
        description: '登录已失效，请重新验证登录信息',
      });
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      },
    );
  });
}
/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      },
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      },
    );
  });
}

export function isError(response) {
  if (response && response.errCode && response.errCode !== 0) return true;
  return false;
}

export function showError(response) {
  notification.error({
    message: '操作失败',
    description: response.errMsg,
  });
}

export function showSuccess(description = '操作成功') {
  console.log('操作成功');
  notification.success({
    message: '操作成功',
    description: description,
  });
}
