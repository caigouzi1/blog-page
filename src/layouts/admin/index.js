import { Icon, Card, Avatar, Row, Col } from 'antd';
import React from 'react';
import avatar from '@/assets/image/avatar.jpg';
import GoBack from '@/components/GoBack';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', left: 20, top: 20 }}>
          <GoBack />
        </div>

        <div style={{ height: '90%' }}>{this.props.children}</div>
      </div>
    );
  }
}
