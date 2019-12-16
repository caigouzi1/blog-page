import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Link, withRouter } from 'dva/router';
import { connect } from 'dva';
import NavList from './NavList.json';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1517570_woj0eqaff5.js', // 在 iconfont.cn 上生成
});

@connect(user => ({
  user,
}))
class Nav extends Component {
  handleClick = e => {};

  isLogin = () => {
    const { user } = this.props.user;
    return user.data.length === 0 ? false : true;
  };

  getCurrentNav = () => {
    const url = this.props.location.pathname;
    let retKey = '1';
    for (let i = NavList.length - 1; i >= 0; i--) {
      let reg = new RegExp(`^${NavList[i].link}`);
      if (reg.test(url)) {
        return (retKey = NavList[i].key.toString());
      }
    }
    return retKey;
  };

  // 菜单渲染
  renderMenu = data => {
    const isLogin = this.isLogin();
    return data.map(item => {
      let titleIcon = item.icon ? (
        <Icon type={item.icon} />
      ) : (
        <MyIcon type={'icon-' + item.myIcon} />
      );
      return item.isAdmin ? (
        isLogin ? (
          <Menu.Item key={item.key}>
            <Link to={item.link}>
              {titleIcon}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ) : (
          ''
        )
      ) : (
        <Menu.Item key={item.key}>
          <Link to={item.link}>
            {titleIcon}
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      );
    });
  };

  async componentWillMount() {
    if (!this.isLogin()) {
      await this.props.dispatch({
        type: 'user/userCurrent',
        payload: {},
      });
    }
  }

  async componentWillMount() {}

  render() {
    const getCurrentNavKey = this.getCurrentNav();
    const menuTree = this.renderMenu(NavList);
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={[getCurrentNavKey]}
        mode="inline"
        theme="dark"
      >
        {menuTree}
        <Menu theme="dark" selectable={false} style={{ position: 'absolute', bottom: 20 }}>
          <Menu.Item style={{ fontSize: 16 }}>
            <a href="https://github.com/caigouzi1" target="_blank">
              <Icon type="github" />
              <span>GitHub</span>
            </a>
          </Menu.Item>
        </Menu>
      </Menu>
    );
  }
}

export default withRouter(Nav);
