import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import { Icon, Input, Button, Form } from 'antd';
import styles from './login.less';

@connect(user => ({
  user,
}))
@Form.create()
class Login extends Component {
  handleLogin = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.dispatch({
          type: 'user/userLogin',
          payload: values,
        });

        const { data } = this.props.user.user;
        if (data.length !== 0) {
          this.props.history.goBack();
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className={styles.content} onSubmit={this.handleLogin}>
        <Helmet>
          <title>登录</title>
        </Helmet>
        <h2>用户登录</h2>
        <li>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名不能为空!' }],
            })(
              <Input
                size="large"
                placeholder="请输入用户名"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />,
            )}
          </Form.Item>
        </li>
        <li>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码不能为空!' }],
            })(
              <Input.Password
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入密码"
              />,
            )}
          </Form.Item>
        </li>
        <li>
          <Button type="primary" size="large" block htmlType="submit">
            登录
          </Button>
        </li>
      </Form>
    );
  }
}

export default Login;
