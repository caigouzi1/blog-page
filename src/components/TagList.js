import React from 'react';
import { connect } from 'dva';
import { List, Tag } from 'antd';

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
    if (category.length != 0 && category[0].Title !== '全部') {
      category.unshift({ Title: '全部' });
    }

    return (
      <List
        header="标签"
        size="small"
        bordered
        dataSource={category}
        renderItem={item => (
          <List.Item>
            <Tag
              color="blue"
              style={{ fontSize: 14 }}
              onClick={() => {
                this.handleClick(item.Id);
              }}
            >
              {item.Title}
            </Tag>
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
