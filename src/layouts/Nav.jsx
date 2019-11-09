import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import NavList from './NavList.json';

@connect(user => ({
  user,
}))
class Nav extends Component {
  handleClick = e => {};

  // 菜单渲染
  renderMenu = data => {
    const { user } = this.props.user;
    const isLogin = user.data.length === 0 ? false : true;
    return data.map(item => {
      return item.isAdmin ? (
        isLogin ? (
          <Menu.Item key={item.key}>
            <Link to={item.link}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ) : (
          ''
        )
      ) : (
        <Menu.Item key={item.key}>
          <Link to={item.link}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      );
    });
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(NavList);
    this.setState({
      menuTreeNode,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {this.state.menuTreeNode}
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

export default Nav;
