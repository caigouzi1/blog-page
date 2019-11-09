import { post } from '../utils/http';

export default {
  async queryUserLogin(params) {
    return await post('/user/login', params);
  },
};
