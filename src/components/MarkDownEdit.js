import React from 'react';
import { Input, Row, Col, Button, notification, Select } from 'antd';
import POWERMODE from '@/assets/js/activate-power-mode';
import ShowMarkDown from '@/components/ShowMarkDown/index';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

const { TextArea } = Input;
const { Option } = Select;
const InputGroup = Input.Group;

@connect(article => ({
  article,
}))
class MarkDownEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
      type: 'markdown',
      category: 0,
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

    this.props.dispatch({
      type: 'article/articleCategoryList',
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      content: nextProps.content,
      id: nextProps.id,
      title: nextProps.title,
      category: nextProps.category,
      categoryTitle: nextProps.categoryTitle,
    });
    if (nextProps.Type) {
      this.setState({
        type: nextProps.Type,
      });
    }
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  handleSearchChange = e => {
    this.setState({ title: e.target.value });
  };

  hanldSubmitEdit = e => {
    if (this.state.content && this.state.title && this.state.type && this.state.category) {
      this.props.dispatch({
        type: 'article/articleEdit',
        payload: {
          id: this.state.id,
          content: this.state.content,
          title: this.state.title,
          category: this.state.category,
          type: this.state.type,
        },
      });
      this.props.history.replace('/admin/list');
    } else {
      notification.error({
        message: '操作失败',
        description: '信息不完整',
      });
    }
  };

  //响应滚轮滑动
  handleEditScroll = e => {
    if (this.editEnable) {
      this.initScale();
      this.preview.scrollTop = this.edit.scrollTop * this.scale;
    }
  };

  handlePreviewScroll = e => {
    if (this.previewEnable) {
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

  //select响应事件
  handlSelectChange = (value, e) => {
    this.setState({ category: parseInt(value), categoryTitle: e.props.children });
  };

  render() {
    const defaultContent = this.state.content;
    const { article } = this.props.article;
    const category = article.category;
    console.log(this.state.categoryTitle);
    return (
      <div>
        <InputGroup compact style={{ maxWidth: '50%', margin: '40px auto 0px' }}>
          <Select
            style={{ minWidth: 100 }}
            value={this.state.categoryTitle}
            onChange={this.handlSelectChange}
            placeholder="标签"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {category.map(item => (
              <Option key={item.Id}>{item.Title}</Option>
            ))}
          </Select>
          <Input
            value={this.state.title}
            style={{ maxWidth: '30%' }}
            placeholder="标题"
            onChange={this.handleSearchChange}
          />
          <Button type="primary" onClick={this.hanldSubmitEdit}>
            提交
          </Button>
        </InputGroup>
        <Row
          type="flex"
          justify="space-between"
          gutter={40}
          style={{
            maxWidth: 1200,
            margin: 'auto',
            marginTop: 40,
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
              onChange={e => this.handleChange(e)}
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
      </div>
    );
  }
}

export default withRouter(MarkDownEdit);
