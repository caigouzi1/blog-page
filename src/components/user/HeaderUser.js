import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Avatar } from 'antd';
import avatar from '@/assets/image/avatar.jpg';
import { Link } from 'dva/router';

@connect(user => ({
  user,
}))
class HeaderUser extends Component {
  state = { header: null };
  async componentDidMount() {
    await this.props.dispatch({
      type: 'user/userCurrent',
      payload: {},
    });

    const header = this.createDom();
    this.setState({
      header,
    });
  }

  handleLogout = async () => {
    await this.props.dispatch({
      type: 'user/userLogout',
      payload: {},
    });

    //重新加载页面
    window.location.reload();
  };

  isLogin = () => {
    const { user } = this.props.user;
    return user.data.length === 0 ? false : true;
  };

  createDom = () => {
    const { user } = this.props.user;
    const isLogin = this.isLogin();
    return isLogin ? (
      <div style={{ marginTop: 5 }}>
        <Avatar size="large" src={avatar} />
        <span style={{ marginLeft: 10 }}>{user.data.Nickname}</span>
        <Button onClick={this.handleLogout} type="primary" style={{ marginLeft: 15 }}>
          退出
        </Button>
      </div>
    ) : (
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
    );
  };

  render() {
    return <span>{this.state.header} </span>;
  }
}

export default HeaderUser;
