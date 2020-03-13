import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import TitleList from '@/components/TitleList/index.jsx';
import { Row, Col, Button, Icon, Affix, PageHeader } from 'antd';
import Category from '@/components/Category';
import { Link } from 'dva/router';

@connect(article => ({
  article,
}))
class Article extends React.Component {
  update() {
    this.props.dispatch({
      type: 'article/articleAll',
    });
  }

  render() {
    return (

      <Row
        type="flex"
        justify="space-between"
        gutter={40}
        style={{ maxWidth: 1200, margin: '40px auto' }}
      >
        <PageHeader
          onBack={() => window.history.back()}
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title={
            <Link to="/admin/article/edit/">
              <Button type="primary" ghost={true} style={{ marginLeft: 20 }}>
                <Icon type="plus" />
                新增
                </Button>
            </Link>
          }
        >
          <Helmet>
            <title>文章列表</title>
          </Helmet>
          <Col span={19}>
            <Row span={22} style={{ overflow: 'auto' }}>
              <TitleList editShowEnable={true} update={this.update.bind(this)}></TitleList>
            </Row>
          </Col>
          <Col span={5}>
            <Affix offsetTop={200}>
              <Category />
            </Affix>
          </Col>
        </PageHeader>
      </Row >
    );
  }
}

export default Article;