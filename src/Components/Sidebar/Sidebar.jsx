import React, { Component } from "react";
import { Layout } from "antd";
import Menu from "./Menu";
import Logo from "../../images/logo.png";

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
                    className="left-panel"
                >
                    <div className="logo">
                        <img src={Logo} alt="Everything is here" />
                    </div>
                    <Menu />
                </Sider>
            </React.Fragment>
        );
    }
}
export default Sidebar;
