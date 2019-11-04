import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Avatar } from 'antd';
import avatar from '@/assets/image/avatar.jpg';
import { Link } from 'dva/router';

@connect(user => ({
  user,
}))
class HeaderUser extends Component {
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
        <span style={{ marginLeft: 10 }}>Lebmem No.001</span>
      </div>
    );
  };

  render() {
    return <span>{this.createDom()} </span>;
  }
}

export default HeaderUser;
