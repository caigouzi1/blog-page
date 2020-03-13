import React from 'react';
import { Helmet } from 'react-helmet';
import { PageHeader } from 'antd';
import MarkDownEdit from '@/components/MarkDownEdit';
import { connect } from 'dva';

@connect(article => ({
  article,
}))
class Modify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.id;
    id = Number(id);
    await this.props.dispatch({
      type: 'article/articleDetail',
      payload: {
        id,
      },
    });

    const { article } = this.props.article;
    let detail = article.detail;

    this.setState({
      content: detail.Content,
      id: detail.Id,
      title: detail.Title,
      category: detail.Category,
      categoryTitle: detail.CategoryTitle,
    });
  }

  updataContent = e => { };

  render() {
    return (
      <PageHeader
        onBack={() => window.history.back()}
        title='返回'
        style={{
          maxWidth: '1200px',
          margin: 'auto'
        }}
      >
        <Helmet>
          <title>修改文章</title>
        </Helmet>
        <MarkDownEdit
          content={this.state.content}
          id={this.state.id}
          title={this.state.title}
          type={this.state.type}
          categoryTitle={this.state.categoryTitle}
          category={this.state.category}
        />
      </PageHeader>
    );
  }
}

export default Modify;
