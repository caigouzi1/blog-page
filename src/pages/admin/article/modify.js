import React from 'react';
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
    this.setState({ content: detail.Content });
  }

  render() {
    return <MarkDownEdit content={this.state.content} />;
  }
}

export default Modify;
