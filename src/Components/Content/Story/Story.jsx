import React, { Component } from "react";
import { List, Icon } from "antd";
import IconText from "./IconText";
const { Item } = List;

class Story extends Component {
    render() {
        const { title } = this.props.story;
        return (
            <Item
                className="story-item"
                key={title}
                actions={[
                    <IconText type="link" text="Hacker News" />,
                    <IconText type="star" text="10 pts" />,
                    <IconText type="user" text="Simon Gomes" />,
                    <IconText type="message" text="112" />
                ]}
            >
                <Item.Meta className="story-meta" title={title} />
            </Item>
        );
    }
}
export default Story;
