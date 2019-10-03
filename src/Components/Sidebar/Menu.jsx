import React, { Component } from "react";
import { List } from "antd";
import MenuItem from "./MenuItem";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                {
                    title: "Everything",
                    source: "all"
                },
                {
                    title: "",
                    source: "divider"
                },
                {
                    title: "Hacker News",
                    source: "hn"
                },
                {
                    title: "Medium",
                    source: "medium"
                },
                {
                    title: "Reddit",
                    source: "reddit"
                },
                {
                    title: "Product Hunt",
                    source: "ph"
                },
                {
                    title: "Github Trending",
                    source: "github"
                },
                {
                    title: "Designer News",
                    source: "dn"
                },
                {
                    title: "Slashdot",
                    source: "slashdot"
                },
                {
                    title: "Lifehacker",
                    source: "lifehacker"
                }
            ]
        };
    }

    render() {
        return (
            <List
                className="site-menu"
                itemLayout="vertical"
                dataSource={this.state.menuList}
                renderItem={menu => <MenuItem menuList={menu} />}
            />
        );
    }
}
export default Menu;
