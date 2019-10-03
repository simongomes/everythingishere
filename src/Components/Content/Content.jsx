import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import StoryList from './Story/StoryList';
import { connect } from 'react-redux';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: 'Everything'
    };
  }
  render() {
    return (
      <React.Fragment>
        <Layout.Content className="right-panel">
          <div className="content-wrap">
            <Row>
              <Col span={24}>
                <div className="header">
                  <h1 className="origin">{this.props.channel}</h1>
                  <StoryList />
                </div>
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    channel: state.channel
  };
};
export default connect(mapStateToProps)(Content);
