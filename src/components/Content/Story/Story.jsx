import React, { Component } from 'react';
import { List } from 'antd';
import IconText from './IconText';
const { Item } = List;

class Story extends Component {
  render() {
    const { story } = this.props;
    const {
      author,
      comment_link,
      comments,
      category,
      created,
      one_sources,
      score,
      title,
      url,
      read_time,
      stars,
      dept
    } = this.props.story;

    // actions
    let actions = [];
    // Set channel name
    let channel = null;
    let channel_icon = null;
    if (one_sources !== undefined) {
      switch (one_sources[0]) {
        case 'hn':
          channel = 'Hacker News';
          channel_icon = 'api';
          break;
        case 'reddit':
          channel = 'Reddit';
          channel_icon = 'reddit';
          break;
        case 'ph':
          channel = 'Product Hunt';
          channel_icon = 'api';
          break;
        case 'slashdot':
          channel = 'Slashdot';
          channel_icon = 'api';
          break;
        case 'dn':
          channel = 'Designer News';
          channel_icon = 'ant-design';
          break;
        case 'github':
          channel = 'GitHub Treands';
          channel_icon = 'github';
          break;
        case 'medium':
          channel = 'Medium';
          channel_icon = 'medium';
          break;
        case 'lifehacker':
          channel = 'Lifehacker';
          channel_icon = 'api';

          break;
        default:
          break;
      }
      actions.push(<IconText type={channel_icon} text={channel} />);
    }
    if (author !== undefined) {
      actions.push(<IconText type="user" text={author} />);
    }
    if (score !== undefined) {
      actions.push(<IconText type="star" text={score + ' pts'} />);
    }
    if (comments !== undefined && comments > 0) {
      actions.push(<IconText type="message" text={comments} />);
    }
    if (read_time !== undefined) {
      actions.push(<IconText type="clock-circle" text={read_time} />);
    }
    if (stars !== undefined) {
      actions.push(<IconText type="star" text={stars + ' stars'} />);
    }
    if (dept !== undefined) {
      actions.push(<IconText type="star" text={'from the' + dept + ' dept'} />);
    }
    return (
      <a href={story.url} target="__blank">
        <Item className="story-item" key={title} actions={actions}>
          <Item.Meta className="story-meta" title={story.title} />
        </Item>
      </a>
    );
  }
}
export default Story;
