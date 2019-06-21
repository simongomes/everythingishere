import React, { Component } from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import Story from './Story';
import { setInitialStories } from './../../../actions/index';

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

  componentDidMount() {
    this.props.setInitialStories();
  }
}

// Redux Mapping
const mapDispatchToProps = dispatch => {
  return {
    setInitialStories: () => {
      dispatch(setInitialStories());
    }
  };
};

const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};

// Connect componet to the store and export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList);
