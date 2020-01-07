import React from "react";
import { Spin, Menu, Button, Dropdown, Icon } from "antd";

const member = ["Raj", "Vishal", "Adam", "Nik", "Smith"];
export default class Home extends React.Component {
    constructor(props) {
        super(props);
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
            {this.member()}
        </Menu>
    );
    //
    member() {
        return member.map(member => (
            <Menu.Item key={member}>{member}</Menu.Item>
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
