import Api from '../services/user';
import { isError, showError } from '../utils/http';

export default {
  namespace: 'user',

  state: {
    data: [],
  },
  reducers: {
    updata(state, action) {
      return { ...state, data: action.payload };
    },
  },
  effects: {
    *userLogin({ payload }, { call, put }) {
      const response = yield call(Api.queryUserLogin, payload);
      if (isError(response)) {
        showError(response);
      } else {
        yield put({
          type: 'updata',
          payload: response,
        });
      }
    },
  },
};
