import React from 'react';
import { PageHeader } from 'antd';
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
      <PageHeader
        onBack={() => window.history.back()}
        title='返回'
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
      >
        <Helmet>
          <title>编辑</title>
        </Helmet>
        <MarkDownEdit />
      </PageHeader>
    );
  }
}

export default Edit;
