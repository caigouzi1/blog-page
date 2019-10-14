import Api from '../services/article';

export default {
  namespace: 'article',

  state: {
    data: [],
    detail: {},
  },
  reducers: {
    updata(state, action) {
      return { ...state, data: action.payload };
    },

    updataDetail(state, action) {
      return { ...state, detail: action.payload };
    },

    all(state) {
      return { data: state.data };
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
  },
};
