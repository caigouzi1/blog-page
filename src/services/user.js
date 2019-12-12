import { post } from '../utils/http';

export default {
  async queryUserLogin(params) {
    return await post('/user/login', params);
  },
  async queryUserCurrent(params) {
    return await post('/user/current', params);
  },
  async queryUserLogout(params) {
    return await post('/user/logout', params);
  },
};
