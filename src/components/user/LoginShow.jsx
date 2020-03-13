import React, { Component } from 'react';
import { connect } from 'dva';

@connect(user => ({
  user,
}))
class LoginShow extends Component {
  isLogin = () => {
    const { user } = this.props.user;
    return user.data.length === 0 ? false : true;
  };

  render() {
    const children = this.props.children;
    const html = this.isLogin() ? children : '';
    return <div>{html}</div>;
  }
}

export default LoginShow;
