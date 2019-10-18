import { Layout, Icon, Card, Avatar } from 'antd';
import React from 'react';
import avatar from '@/assets/image/avatar.jpg';
import './index.less';

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Layout>
          <Layout className="container">
            <Header style={{ background: '#fff', padding: 0, height: 80 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}
              />
              <div className="logo">
                <Avatar size={64} src={avatar} />
              </div>
            </Header>
            <Card className="content">
              <Content>{this.props.children}</Content>
            </Card>
          </Layout>
        </Layout>
      </div>
    );
  }
}
