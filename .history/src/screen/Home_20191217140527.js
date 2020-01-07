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
                // this.setState({ playingMember: e.key });
                this.searchSanta(e.key);
                //console.log("selcted item", e.key);
            }}
        >
            {this.memberList()}
        </Menu>
    );
    //Search member santa
    searchSanta = member => {
        console.log("revived mamber");
        var array = [...this.state.matchList]; // make a separate copy of the array
        var index = array.indexOf(member);
        if (index !== -1) {
            array.splice(index, 1);
            let random = array[Math.floor(Math.random() * array.length)];
            let deleteSantaIndex = array.indexOf(random);
            array.splice(deleteSantaIndex, 1);
            array.push(member);
            this.setState({ matchList: array });
            alert("mysanta", random);
        }
    };
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
                        {this.state.playingMember}
                        <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        );
    }
}
