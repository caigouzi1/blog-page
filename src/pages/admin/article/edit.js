import React from 'react';
import { connect } from 'dva';
import MarkDownEdit from '@/components/MarkDownEdit';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {}

  render() {
    return <MarkDownEdit />;
  }
}

export default Edit;
