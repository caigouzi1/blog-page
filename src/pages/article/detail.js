import React from 'react';
import { connect } from 'dva';
import { Input, Icon } from 'antd';
import POWERMODE from '@/assets/js/activate-power-mode';
import Utils from '@/utils/myTools';

const { TextArea } = Input;

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
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    const backStyle = {
      position: 'relative',
      right: 180,
      fontSize: '20px',
      height: 30,
    };
    const { article } = this.props.article;
    let detail = article.detail;
    const content = Utils.MdtoHtml(detail.Content);
    return (
      <div style={{ maxWidth: 900, margin: 'auto' }}>
        <div onClick={this.goBack} style={backStyle}>
          <Icon type="arrow-left" style={{ fontSize: 30 }} />
          <div style={{ display: 'inline-block', marginLeft: 3 }}>返回目录</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <TextArea rows={4} style={{ marginTop: 20 }} />
      </div>
    );
  }
}

export default Article;
