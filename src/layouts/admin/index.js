import { ConfigProvider } from 'antd';
import React from 'react';
import GoBack from '@/components/GoBack';
import './index.less';
import zhCN from 'antd/es/locale/zh_CN';

export default class Home extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div className="container">
          <div className="back">
            <GoBack />
          </div>
          <div className="content">{this.props.children}</div>
        </div>
      </ConfigProvider>
    );
  }
}
