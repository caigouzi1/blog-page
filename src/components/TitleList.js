import { Card, Icon, Empty } from 'antd';
import React from 'react';
import moment from 'moment';
import { Link } from 'dva/router';
import ShowDown from 'showdown';
import Utils from '@/utils/myTools';

export default class TitleList extends React.Component {
  getAbstract = (content, title) => {
    let converter = new ShowDown.Converter();
    let text = converter.makeHtml(content);
    text = Utils.removeHTMLTag(text);
    text = text.substr(0, 350);
    text = this.trim(text, title);
    return text + '...';
  };
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
            style={{ position: 'relative', margin: 15, fontSize: 18 }}
          >
            <div style={{ fontSize: 23, marginBottom: 5 }}>
              <h2>{item.Title}</h2>
            </div>
            {abstract}
            <div
              style={{
                marginTop: 5,
                height: 16,
                bottom: 0,
                fontSize: 16,
                color: '#a9b0bc',
              }}
            >
              <div style={{ position: 'absolute', right: 15 }}>
                <span style={{ margin: 8 }}>
                  <Icon type="clock-circle" />
                </span>
                {moment(item.Timecreated).format('l')}
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
