import React, { Component } from "react";
import { List } from "antd";
import IconText from "./IconText";
const { Item } = List;

class Story extends Component {
    render() {
        console.log(this.props.story);
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
            url
        } = this.props.story;

        // actions
        let actions = [];
        // Set channel name
        let channel = null;
        if (one_sources !== undefined) {
            switch (one_sources[0]) {
                case "hn":
                    channel = "hacker News";
                    break;
                case "reddit":
                    channel = "Reddit";
                    break;
                case "ph":
                    channel = "Product Hunt";
                    break;
                case "slashdor":
                    channel = "Slashdot";
                    break;
                case "dn":
                    channel = "Designer News";
                    break;
                case "github":
                    channel = "GitHub Treands";
                    break;
                case "medium":
                    channel = "Medium";
                    break;
                case "lifehacker":
                    channel = "Lifehacker";
                    break;
                default:
                    break;
            }
            actions.push(<IconText type="api" text={channel} />);
        }
        if (author !== undefined) {
            actions.push(<IconText type="user" text={author} />);
        }
        return (
            <a href={story.url} target="__blank">
                <Item
                    className="story-item"
                    key={title}
                    actions={actions}
                    // actions={[
                    //     <IconText type="link" text={story.one_sources[0]} />,
                    //     <IconText type="star" text={score + " pts"} />,
                    //     <IconText type="user" text={by} />,
                    //     <IconText type="message" text={kids ? kids.length : 0} />
                    // ]}
                >
                    <Item.Meta className="story-meta" title={story.title} />
                </Item>
            </a>
        );
    }
}
export default Story;
