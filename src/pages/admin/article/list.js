import React from 'react';
import { connect } from 'dva';
import TitleList from '@/components/TitleList';
import { Row, Col, Button, Icon, Affix } from 'antd';
import TagList from '@/components/TagList';
import { Link } from 'dva/router';

@connect(article => ({
  article,
}))
class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/articleAll',
    });
  }

  update() {
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
        style={{ maxWidth: 1200, margin: '40px auto' }}
      >
        <Col span={19}>
          <Row span={2}>
            <Link to="/admin/article/edit/">
              <Button type="primary" ghost={true} style={{ marginLeft: 20 }}>
                <Icon type="plus" />
                新增
              </Button>
            </Link>
          </Row>
          <Row span={22} style={{ overflow: 'auto' }}>
            <TitleList
              editShowEnable={true}
              dataSource={article.data.Data}
              update={this.update.bind(this)}
            ></TitleList>
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