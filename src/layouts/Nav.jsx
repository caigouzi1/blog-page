import { Menu, Icon } from "antd";
import React from "react";
import { Link } from "dva/router";
import NavList from "./NavList.json"

export default class Nav extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      return (<Menu.Item key={item.key}>
        <Link to={item.link}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Link>
      </Menu.Item>)
    })
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(NavList);
    console.log(menuTreeNode)
    this.setState({
      menuTreeNode
    })
  }

  render() {


    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        {this.state.menuTreeNode}
      </Menu>
    );
  }
}