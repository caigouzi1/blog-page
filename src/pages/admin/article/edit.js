import React from 'react';
import MarkDownEdit from '@/components/MarkDownEdit';
import { Helmet } from 'react-helmet';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() { }

  render() {
    return (
      <div>
        <Helmet>
          <title>编辑</title>
        </Helmet>
        <MarkDownEdit />
      </div>
    );
  }
}

export default Edit;
