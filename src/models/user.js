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
  effects: {},
};
