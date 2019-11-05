import React, { Component } from 'react';
import { List, Divider } from 'antd';
import { connect } from 'react-redux';
import { updateStories, updateChannel, setInitialStories } from '../../actions';

const { Item } = List;

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.updateStories = this.updateStories.bind(this);
  }
  render() {
    const { title, source } = this.props.menuList;

    let item = (
      <Item
        className={'menu-item ' + source}
        key={title}
        onClick={() => this.updateStories(source)}
      >
        <Item.Meta className="menu-text" title={title} />
      </Item>
    );
    if (source === 'divider') {
      item = <Divider />;
    }
    return item;
  }

  updateStories(channel) {
    if (channel === 'everything') {
      this.props.setInitialStories();
    } else {
      this.props.updateStories(channel);
      this.props.updateChannel(channel);
    }
  }
}
// Redux Mapping
const mapDispatchToProps = dispatch => {
  return {
    setInitialStories: () => {
      dispatch(setInitialStories());
    },
    updateStories: channel => {
      dispatch(updateStories(channel));
    },
    updateChannel: channel => {
      dispatch(updateChannel(channel));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
