import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Text } = Typography;

export default class Test extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: 900, margin: 'auto' }}>
        <Title level={3}>游戏列表</Title>
        <Row type="flex" justify="space-between" align="bottom">
          <Col span={11}>
            <a target="_blank" href="http://game.elpsycongroo.xyz/clearmines/">
              <Card title="扫雷" hoverable={true} bordered={true}>
                <Text type="secondary">
                  以最短的时间标记<Text type="danger">所有地雷</Text>即可获胜
                </Text>
              </Card>
            </a>
          </Col>
          <Col span={11}>
            <Card title="FlappyBird" hoverable={true} bordered={true}>
              暂未开放
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
