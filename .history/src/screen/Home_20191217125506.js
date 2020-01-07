import React from "react";
import { Spin, Menu, Button, Dropdown } from "antd";

const member = ["Raj", "Vishal", "Adam", "Nik", "Smith"];
export default class Home extends React.Component {
    constructor(props) {
        this.state = {
            matchList: ["Raj", "Vishal", "Adam", "Nik", "Smith"]
        };
    }
    menu = () => (
        <Menu
            onClick={e => {
                // this.setState({ size: e.key });
                console.log("selcted item", e.key);
            }}
        >
            {this.renderSize()}
        </Menu>
    );
    //
    renderSize() {
        return JSON.parse(this.state.data.sizes).map(size => (
            <Menu.Item key={size}>{size}</Menu.Item>
        ));
    }
    render() {
        return (
            <div>
                <Spin />
                <Dropdown overlay={this.menu} className="dropdown-lg">
                    <Button>
                        {this.state.matchList}
                        <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        );
    }
}
