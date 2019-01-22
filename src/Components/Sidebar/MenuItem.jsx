import React, { Component } from "react";
import { List, Divider } from "antd";

const { Item } = List;

class MenuItem extends Component {
    render() {
        const { title, source } = this.props.menuList;

        let item = (
            <Item className={"menu-item " + source} key={title}>
                <Item.Meta className="menu-text" title={title} />
            </Item>
        );
        if (source === "divider") {
            item = <Divider />;
        }
        return item;
    }
}
export default MenuItem;
