import React, { Component } from "react";
import { Layout } from "antd";

const { Sider } = Layout;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    render() {
        return (
            <React.Fragment>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <h1>Sidebar</h1>
                </Sider>
            </React.Fragment>
        );
    }
}
export default Sidebar;
