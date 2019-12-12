import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Avatar } from 'antd';
import avatar from '@/assets/image/avatar.jpg';
import { Link } from 'dva/router';

@connect(user => ({
  user,
}))
class HeaderUser extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'user/userCurrent',
      payload: {},
    });
  }

  handleLogout() {
    this.props.dispatch({
      type: 'user/userLogout',
      payload: {},
    });
  }

  createDom = () => {
    const { user } = this.props.user;
    return user.data.length === 0 ? (
      <Link to="/admin/login">
        <Button
          type="primary"
          style={{
            marginRight: 40,
            marginTop: 25,
          }}
        >
          login
        </Button>
      </Link>
    ) : (
      <div style={{ marginTop: 5 }}>
        <Avatar size="large" src={avatar} />
        <span style={{ marginLeft: 10 }}>{user.data.Nickname}</span>
        <Button onClick={this.handleLogout()} type="primary" style={{ marginLeft: 15 }}>
          退出
        </Button>
      </div>
    );
  };

  render() {
    return <span>{this.createDom()} </span>;
  }
}

export default HeaderUser;
