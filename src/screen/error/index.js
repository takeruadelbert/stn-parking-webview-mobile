import React, {Component} from 'react';
import WebViewError from './WebViewError';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <WebViewError props={this.props} />;
  }
}

export default Index;
