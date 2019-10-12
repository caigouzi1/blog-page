import React from 'react';
import { connect } from 'dva';
import TitleList from "@/components/TitleList"


@connect(article => ({
  article,
}))

class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "article/articleAll"
    });
  }

  render() {
    const { article } = this.props.article;
    return (
      <TitleList dataSource={article.data.Data}></TitleList>
    );
  }
}

export default Article