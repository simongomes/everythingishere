import React, { Component } from 'react';
import { List } from 'antd';
import IconText from './IconText';
const { Item } = List;

class Story extends Component {
  render() {
    const { by, score, title, kids } = this.props.story;
    return (
      <Item
        className="story-item"
        key={title}
        actions={[
          <IconText type="link" text={this.props.channel} />,
          <IconText type="star" text={score + ' pts'} />,
          <IconText type="user" text={by} />,
          <IconText type="message" text={kids ? kids.length : 0} />
        ]}
      >
        <Item.Meta className="story-meta" title={title} />
      </Item>
    );
  }
}
export default Story;
