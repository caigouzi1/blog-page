import { Icon, Card, Avatar, Row, Col } from 'antd';
import React from 'react';
import avatar from '@/assets/image/avatar.jpg';
import GoBack from '@/components/GoBack';
import './index.less';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="back">
          <GoBack />
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
