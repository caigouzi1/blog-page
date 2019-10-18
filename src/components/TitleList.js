import { Card, Icon, Empty } from 'antd';
import React from 'react';
import moment from 'moment';
import { Link } from 'dva/router';
import Utils from '@/utils/myTools';

export default class TitleList extends React.Component {
  getList(list) {
    if (list === undefined) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ marginTop: 200 }} />;
    }
    moment.locale('zh-cn');
    return list.map(item => {
      const id = item.Id;
      const src = `/article/${id}`;
      const abstract = Utils.getMdAbstract(item.Content, item.Title);
      return (
        <Link to={src} key={item.Id}>
          <Card
            key={item.Id}
            size="small"
            bordered={false}
            hoverable={true}
            style={{ position: 'relative', margin: 15, fontSize: 17 }}
          >
            <div style={{ fontSize: 23, marginBottom: 5 }}>
              <h3>{item.Title}</h3>
            </div>
            {abstract}
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
        </Link>
      );
    });
  }

  render() {
    return <div>{this.getList(this.props.dataSource)}</div>;
  }
}
