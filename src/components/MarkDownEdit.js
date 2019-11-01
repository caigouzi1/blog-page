import React from 'react';
import { Input, Row, Col } from 'antd';
import POWERMODE from '@/assets/js/activate-power-mode';
import ShowMarkDown from '@/components/ShowMarkDown/index';

const { TextArea } = Input;

class MarkDownEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.editDom = React.createRef();
  }

  editEnable = false;
  previewEnable = false;

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.content);
  //   if (props.content !== state.content) {
  //     return {
  //       ...state,
  //       defaultContent: props.content,
  //     };
  //   }
  //   return null;
  // }

  initScale = () => {
    this.edit = document.querySelector('.edit');
    this.preview = document.querySelector('.preview');
    if (
      this.preview.offsetHeight != null &&
      this.preview.scrollHeight != null &&
      this.edit.offsetHeight != null &&
      this.edit.scrollHeight != null
    ) {
      this.scale =
        (this.preview.offsetHeight - this.preview.scrollHeight) /
        (this.edit.offsetHeight - this.edit.scrollHeight);
    }
  };

  componentDidMount() {
    //编辑器特效
    POWERMODE.colorful = true; // make power mode colorful
    POWERMODE.shake = false; // turn off shake
    document.body.addEventListener('input', POWERMODE);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ content: nextProps.content });
  }

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleEditScroll = e => {
    if (this.editEnable) {
      this.initScale();
      console.log('edit');
      this.preview.scrollTop = this.edit.scrollTop * this.scale;
    }
  };

  handlePreviewScroll = e => {
    if (this.previewEnable) {
      console.log('preview');
      this.initScale();
      this.edit.scrollTop = this.preview.scrollTop / this.scale;
    }
  };

  handleEditMouseOver = () => {
    this.editEnable = true;
    this.previewEnable = false;
  };

  handlePreviewMouseOver = () => {
    this.editEnable = false;
    this.previewEnable = true;
  };

  render() {
    const defaultContent = this.state.content;
    return (
      <Row
        type="flex"
        justify="space-between"
        gutter={40}
        style={{
          maxWidth: 1200,
          margin: 'auto',
          marginTop: 80,
        }}
      >
        <Col span={12}>
          <TextArea
            className="edit"
            defaultValue={this.state.content}
            rows={35}
            style={{
              marginTop: 20,
            }}
            ref={this.editDom}
            onChange={this.handleChange}
            onScroll={this.handleEditScroll}
            onMouseOver={this.handleEditMouseOver}
          />
        </Col>
        <Col
          onScroll={this.handlePreviewScroll}
          onMouseOver={this.handlePreviewMouseOver}
          className="preview"
          span={12}
          style={{
            marginTop: 20,
            height: 750,
            overflow: 'auto',
          }}
        >
          <ShowMarkDown content={this.state.content} />
        </Col>
      </Row>
    );
  }
}

export default MarkDownEdit;
