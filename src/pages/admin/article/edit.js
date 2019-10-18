import React from 'react';
import { connect } from 'dva';
import { Input, Row, Col } from 'antd';
import POWERMODE from '@/assets/js/activate-power-mode';
import Utils from '@/utils/myTools';
import ShowMarkDown from '@/components/ShowMarkDown/index';

const { TextArea } = Input;

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '# Hello World!' };
  }

  componentDidMount() {
    //编辑器特效
    POWERMODE.colorful = true; // make power mode colorful
    POWERMODE.shake = false; // turn off shake
    document.body.addEventListener('input', POWERMODE);
  }

  handleChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    return (
      <Row
        type="flex"
        justify="space-between"
        gutter={40}
        style={{ maxWidth: 1200, margin: 'auto' }}
      >
        <Col span={12}>
          <TextArea rows={4} style={{ marginTop: 20 }} onChange={this.handleChange} />
        </Col>
        <Col span={12} style={{ marginTop: 30 }}>
          <ShowMarkDown content={this.state.content} />
        </Col>
      </Row>
    );
  }
}

export default Edit;
