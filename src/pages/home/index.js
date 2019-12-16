import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import TitleList from '@/components/TitleList';
import { Row, Col, Button, Icon, Affix } from 'antd';
import TagList from '@/components/TagList';
import { Link } from 'dva/router';

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
            <TagList />
          </Affix>
        </Col>
      </Row>
    );
  }
}

export default Article;
