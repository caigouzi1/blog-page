import React, { Component } from 'react';
import Utils from '@/utils/myTools';
import './vue.less';

export default class ShowMarkDown extends Component {
  render() {
    const content = Utils.MdtoHtml(this.props.content);
    return (
      <div
        className="mark"
        style={{ code: { backgordColor: 'red' } }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}
