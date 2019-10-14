import React from 'react';
import { connect } from 'dva';
import { List } from 'antd';

@connect(article => ({
  article,
}))
class TagList extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/articleCategoryList',
    });
  }

  handleClick = id => {
    this.props.dispatch({
      type: 'article/articleAll',
      payload: {
        category: id,
      },
    });
  };

  getCategoryList = () => {
    const { category } = this.props.article.article;
    return (
      <List
        size="small"
        bordered={false}
        dataSource={category}
        renderItem={item => (
          <List.Item
            onClick={() => {
              this.handleClick(item.Id);
            }}
          >
            {item.Title}
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
