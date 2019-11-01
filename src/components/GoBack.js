import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

@connect()
class Goback extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <Button type="primary" ghost={true} onClick={this.goBack}>
        <Icon type="left" />
        Go back
      </Button>
    );
  }
}
export default withRouter(Goback);
