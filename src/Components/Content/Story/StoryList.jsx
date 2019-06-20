import React, { Component } from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import Story from './Story';

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <List
        className="story-list"
        itemLayout="vertical"
        dataSource={this.props.stories}
        renderItem={story => <Story story={story}> </Story>}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};

export default connect(mapStateToProps)(StoryList);
