import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Content from './Content';
import { initGA, logPageView } from './../libs/googleAnalytics';

class SiteRoot extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <div>
        <Layout>
          <Sidebar />
          <Content />
        </Layout>
      </div>
    );
  }
}
export default SiteRoot;
