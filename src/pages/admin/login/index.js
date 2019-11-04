import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
import styles from './login.less';

class Login extends Component {
  render() {
    return (
      <div className={styles.content}>
        <h2>用户登录</h2>
        <li>
          <Input
            size="large"
            placeholder="请输入用户名"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </li>
        <li>
          <Input.Password
            size="large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入密码"
          />
        </li>
        <li>
          <Button type="primary" size="large" block>
            登录
          </Button>
        </li>
      </div>
    );
  }
}

export default Login;
