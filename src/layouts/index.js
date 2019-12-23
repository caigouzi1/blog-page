import { Layout, Icon, Card, Avatar, ConfigProvider } from 'antd';
import React from 'react';
import logo from '@/assets/image/logo.ico';
import { Helmet } from 'react-helmet';
import './index.less';
import Nav from './Nav';
import HeaderUser from '@/components/user/HeaderUser';
import zhCN from 'antd/es/locale/zh_CN';

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Helmet>
          <title>个人博客</title>
        </Helmet>
        <Layout>
          <Sider className="sider" trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <Avatar size={56} src={logo} />
            </div>
            <Nav />
          </Sider>
          <Layout className="container">
            <Header style={{ background: '#fff', padding: 0, height: 80 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{ fontSize: 30, marginTop: 25, marginLeft: 20 }}
              />
              <div style={{ float: 'right', marginRight: 40 }}>
                <HeaderUser />
              </div>
            </Header>
            <Card className="content">
              <Content>{this.props.children}</Content>
            </Card>
            <Footer>晋ICP备19012752号</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    );
  }
}
