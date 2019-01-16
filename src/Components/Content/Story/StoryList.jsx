import React, { Component } from "react";
import { List } from "antd";
import Story from "./Story";

class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [
                {
                    title:
                        "Ant Design, a design language for background applications, is refined by Ant UED Team"
                },
                {
                    title:
                        "Ant Design, a design language for background applications, is refined by Ant UED Team"
                },
                {
                    title:
                        "Ant Design, a design language for background applications, is refined by Ant UED Team"
                },
                {
                    title:
                        "Ant Design, a design language for background applications, is refined by Ant UED Team"
                }
            ]
        };
    }
    render() {
        return (
            <List
                className="story-list"
                itemLayout="vertical"
                dataSource={this.state.stories}
                renderItem={story => <Story story={story}> </Story>}
            />
        );
    }
}
export default StoryList;
