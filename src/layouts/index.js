import { Layout, Icon, Card } from "antd";
import React from "react";
import logo from "../assets/logo.svg";
import "./index.less";
import Nav from "./Nav";
import { Link } from "dva/router";

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div>
        <Layout>
          <Sider
            className="sider"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <Nav />
          </Sider>
          <Layout className="container">
            <Header style={{ background: "#fff", padding: 0, height: 80 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
                style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}
              />
            </Header>
            <Card className="content">
              <Content>{this.props.children}</Content>
            </Card>
            <Footer>@基于Umi框架的功能测试</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
