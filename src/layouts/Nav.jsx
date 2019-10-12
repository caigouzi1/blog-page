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
        <div style = {{position: "absolute",bottom:20,textAlign: "center" }}><a href='https://github.com/caigouzi1' target="_blank" style={{ fontSize: 16 }}><Icon type="github" /><span style={{ marginLeft: 10 }}>GitHub</span></a></div>
      </Menu>
    );
  }
}