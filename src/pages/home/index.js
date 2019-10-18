import React from 'react';
import { connect } from 'dva';
import TitleList from '@/components/TitleList';
import { Row, Col } from 'antd';
import TagList from '@/components/TagList';

@connect(article => ({
  article,
}))
class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/articleAll',
    });
  }

  render() {
    const { article } = this.props.article;
    return (
      <Row
        type="flex"
        justify="space-between"
        gutter={40}
        style={{ maxWidth: 1200, margin: 'auto' }}
      >
        <Col span={19}>
          <TitleList dataSource={article.data.Data}></TitleList>
        </Col>
        <Col span={5} style={{ marginTop: 30 }}>
          <TagList />
        </Col>
      </Row>
    );
  }
}

export default Article;
