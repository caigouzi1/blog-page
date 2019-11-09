import React from 'react';
import { connect } from 'dva';
import { List, Tag } from 'antd';

const { CheckableTag } = Tag;

@connect(article => ({
  article,
}))
class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'article/articleCategoryList',
    });
  }

  handleClick = id => {
    this.setState({ checked: id });
    this.props.dispatch({
      type: 'article/articleAll',
      payload: {
        category: id,
      },
    });
  };

  handleCheak = id => {
    return this.state.checked == id ? true : false;
  };

  isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
  }

  getCategoryList = () => {
    let { category } = this.props.article.article;
    if (this.isArray(category) && category.length != 0 && category[0].Title !== '全部') {
      category.unshift({ Id: 0, Title: '全部' });
    }
    return (
      <List
        header="标签"
        size="small"
        bordered
        dataSource={category}
        renderItem={item => (
          <List.Item>
            <CheckableTag
              style={{ fontSize: 14 }}
              checked={this.handleCheak(item.Id)}
              onChange={() => {
                this.handleClick(item.Id);
              }}
            >
              {item.Title}
            </CheckableTag>
          </List.Item>
        )}
      />
    );
  };
  render() {
    return <div>{this.getCategoryList()}</div>;
  }
}

export default TagList;
