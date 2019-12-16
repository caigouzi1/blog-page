import Api from '../services/user';
import { isError, showError } from '../utils/http';

export default {
  namespace: 'user',

  state: {
    data: [],
  },
  reducers: {
    updata(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *userLogin({ payload }, { call, put }) {
      const response = yield call(Api.queryUserLogin, payload);
      const data = response.data;
      if (isError(response)) {
        showError(response);
      } else {
        yield put({
          type: 'updata',
          payload: { data: data },
        });
      }
    },
    *userCurrent({ payload }, { call, put }) {
      const response = yield call(Api.queryUserCurrent, payload);
      const data = response.data;
      if (!isError(response)) {
        yield put({
          type: 'updata',
          payload: { data: data },
        });
      }
    },
    *userLogout({ payload }, { call, put }) {
      const response = yield call(Api.queryUserLogout, payload);
      const data = response.data;
      if (!isError(response)) {
        yield put({
          type: 'updata',
          payload: { data: [] },
        });
      }
    },
  },
};
