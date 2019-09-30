import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import StoryList from "./Story/StoryList";

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout.Content className="right-panel">
                    <div className="content-wrap">
                        <Row>
                            <Col span={24}>
                                <div className="header">
                                    <h1 className="origin">Everything</h1>
                                    <StoryList />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Layout.Content>
            </React.Fragment>
        );
    }
}
export default Content;
