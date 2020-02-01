import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import { Input } from 'antd';
import POWERMODE from '@/assets/js/activate-power-mode';
import ShowMarkDown from '@/components/ShowMarkDown/index';
import GoBack from '@/components/GoBack';

const { TextArea } = Input;

const goBackStyle = {
  position: 'fixed',
  left: '250px',
  top: '25px',
};

@connect(article => ({
  article,
}))
class Article extends React.Component {
  componentDidMount() {
    //编辑器特效
    POWERMODE.colorful = true; // make power mode colorful
    POWERMODE.shake = false; // turn off shake
    document.body.addEventListener('input', POWERMODE);

    let id = this.props.match.params.id;
    id = Number(id);
    this.props.dispatch({
      type: 'article/articleDetail',
      payload: {
        id,
      },
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'article/clearDetail',
    });
  }

  render() {
    const { article } = this.props.article;
    let detail = article.detail;
    return (
      <div>
        <Helmet>
          <title>{detail.Title}</title>
        </Helmet>
        <div style={goBackStyle}>
          <GoBack />
        </div>
        <div style={{ maxWidth: 900, margin: 'auto' }}>
          <ShowMarkDown content={detail.Content} />
          <TextArea rows={4} style={{ marginTop: 20 }} />
        </div>
      </div>
    );
  }
}

export default Article;
