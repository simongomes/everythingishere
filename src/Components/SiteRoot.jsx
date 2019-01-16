import React, { Component } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

class SiteRoot extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sidebar />
                    <Content />
                </Layout>
            </div>
        );
    }
}
export default SiteRoot;
