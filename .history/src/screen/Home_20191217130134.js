import React from "react";
import { Spin, Menu, Button, Dropdown, Icon } from "antd";

const memberList = ["Raj", "Vishal", "Adam", "Nik", "Smith"];
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchList: ["Raj", "Vishal", "Adam", "Nik", "Smith"],
            playingMember: "Find Your Santa"
        };
    }
    menu = () => (
        <Menu
            onClick={e => {
                this.setState({ playingMember: e.key });
                //console.log("selcted item", e.key);
            }}
        >
            {this.memberList()}
        </Menu>
    );
    //
    memberList() {
        return memberList.map(member => (
            <Menu.Item key={member}>{member}</Menu.Item>
        ));
    }
    render() {
        return (
            <div>
                <Spin />
                <Dropdown overlay={this.menu} className="dropdown-lg">
                    <Button>
                        Find your match
                        <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        );
    }
}
