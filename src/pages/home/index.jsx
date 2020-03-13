import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import TitleList from '@/components/TitleList/index.jsx';
import { Row, Col, Affix } from 'antd';
import Category from '@/components/Category';

@connect(article => ({
  article,
}))
class Article extends React.Component {
  render() {
    return (
      <Row
        type="flex"
        justify="space-between"
        gutter={40}
        style={{ maxWidth: 1200, margin: 'auto' }}
      >
        <Helmet>
          <title>文章列表</title>
        </Helmet>
        <Col span={19}>
          <Row span={2}></Row>
          <Row span={22} style={{ overflow: 'auto' }}>
            <TitleList />
          </Row>
        </Col>
        <Col span={5}>
          <Affix offsetTop={200}>
            <Category />
          </Affix>
        </Col>
      </Row>
    );
  }
}

export default Article;
