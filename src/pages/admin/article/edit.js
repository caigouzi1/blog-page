import React from 'react';
import { connect } from 'dva';
import MarkDownEdit from '@/components/MarkDownEdit';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '### 请输入你要填写的内容',
    };
  }

  componentDidMount() {}

  render() {
    return <MarkDownEdit />;
  }
}

export default Edit;
