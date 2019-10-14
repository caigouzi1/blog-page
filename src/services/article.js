import { post } from '../utils/http';

export default {
  async queryArticleAll(params) {
    return await post('/article/all', params);
  },
  async queryArticleDetail(params) {
    return await post('/article/one', params);
  },
  async queryArticleCategoryList(params) {
    return await post('/article/categorylist', params);
  },
};
