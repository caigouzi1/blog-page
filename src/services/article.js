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
  async queryArticleEdit(params) {
    return await post('/article/editarticle', params);
  },
  async queryArticleDelete(params) {
    return await post('/article/deletearticle', params);
  },
};
