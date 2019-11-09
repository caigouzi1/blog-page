import { Card, Icon, Empty, Row, Col, Button } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';
import { Link, withRouter } from 'dva/router';
import Utils from '@/utils/myTools';
import { connect } from 'dva';

@connect(article => ({
  article,
}))
class TitleList extends Component {
  //进入编辑页面
  handleEditClick(item, e) {
    e.stopPropagation();
    this.props.history.push(`/admin/article/modify/${item.Id}`);
  }

  //删除文章
  handleDeleteClick(item, e) {
    e.stopPropagation();
    this.props.dispatch({
      type: 'article/articleDelete',
      payload: { id: item.Id },
    });
    this.props.update();
  }

  handleLink = (id, e) => {
    let src = `/article/${id}`;
    this.props.history.push(src);
  };

  getAbstract(item) {
    if (this.props.editShowEnable) {
      return (
        <Row>
          <Col span={19}>{Utils.getMdAbstract(item.Content, item.Title)}</Col>
          <Col span={2} offset={1}>
            <Button onClick={this.handleEditClick.bind(this, item)}>编辑</Button>
          </Col>
          <Col span={2}>
            <Button onClick={this.handleDeleteClick.bind(this, item)}>删除</Button>
          </Col>
        </Row>
      );
    } else {
      return Utils.getMdAbstract(item.Content, item.Title);
    }
  }

  getList(list) {
    if (list === undefined) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ marginTop: 200 }} />;
    }
    moment.locale('zh-cn');
    return list.map(item => {
      const id = item.Id;
      const abstract = Utils.getMdAbstract(item.Content, item.Title);
      return (
        <Card
          key={item.Id}
          size="small"
          bordered={false}
          hoverable={true}
          style={{ position: 'relative', margin: 15, fontSize: 17 }}
          onClick={() => this.handleLink(item.Id)}
        >
          <div style={{ fontSize: 23, marginBottom: 5 }}>
            <h3>{item.Title}</h3>
          </div>
          {this.getAbstract(item)}
          <div
            style={{
              marginTop: 5,
              height: 16,
              bottom: 0,
              fontSize: 15,
              color: '#a9b0bc',
            }}
          >
            <div style={{ margin: 8 }}>
              <span>
                <Icon type="tag" style={{ marginRight: 8 }} />
                <span>{item.CategoryTitle}</span>
              </span>
              <span style={{ position: 'absolute', right: 15 }}>
                <Icon type="clock-circle" style={{ marginRight: 8 }} />
                {moment(item.Timecreated).format('l')}
              </span>
            </div>
          </div>
        </Card>
      );
    });
  }

  render() {
    return <div>{this.getList(this.props.dataSource)}</div>;
  }
}

export default withRouter(TitleList);
