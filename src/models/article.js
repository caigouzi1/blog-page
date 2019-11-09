import Api from '../services/article';
import { isError, showError, showSuccess } from '../utils/http';

export default {
  namespace: 'article',

  state: {
    data: [],
    detail: {},
    category: [{ Id: 0, Title: '全部' }],
  },
  reducers: {
    updata(state, action) {
      return { ...state, data: action.payload };
    },

    updataDetail(state, action) {
      return { ...state, detail: action.payload };
    },

    updataCategoryList(state, action) {
      return { ...state, category: action.payload };
    },

    all(state) {
      return { data: state.data };
    },

    clearDetail(state) {
      return { ...state, detail: {} };
    },
  },
  effects: {
    *articleAll({ payload }, { call, put }) {
      const response = yield call(Api.queryArticleAll, payload);
      const data = response;
      yield put({
        type: 'updata',
        payload: data,
      });
    },
    *articleDetail({ payload }, { call, put }) {
      const response = yield call(Api.queryArticleDetail, payload);
      const data = response;
      yield put({
        type: 'updataDetail',
        payload: data,
      });
    },
    *articleCategoryList({ payload }, { call, put }) {
      const response = yield call(Api.queryArticleCategoryList, payload);
      const data = response;
      yield put({
        type: 'updataCategoryList',
        payload: data,
      });
    },
    *articleEdit({ payload }, { call, put }) {
      const response = yield call(Api.queryArticleEdit, payload);
      if (isError(response)) {
        showError(response);
      } else {
        showSuccess('编辑文章成功');
      }
    },
    *articleDelete({ payload }, { call, put }) {
      const response = yield call(Api.queryArticleDelete, payload);
      if (isError(response)) {
        showError(response);
      } else {
        showSuccess('删除文章成功');
      }
    },
  },
};
