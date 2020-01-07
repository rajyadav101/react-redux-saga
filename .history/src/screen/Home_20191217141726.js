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
                this.searchSanta(e.key);
                //console.log("selcted item", e.key);
            }}
        >
            {this.memberList()}
        </Menu>
    );
    //Search member santa
    searchSanta = member => {
        console.log("revived mamber", member);
        var array = [...this.state.matchList]; // make a separate copy of the array
        var index = array.indexOf(member);
        console.log("index", index);
        if (index !== -1) {
            console.log("Before delete", array);
            array.splice(index, 1);
            console.log("after delete", array);
            let random = array[Math.floor(Math.random() * array.length)];
            console.log("selected random", random);
            let deleteSantaIndex = array.indexOf(random);
            array.splice(deleteSantaIndex, 1);
            array.push(member);
            console.log("pushed member after", array);
            this.setState({ matchList: array });
            console.log("state after adding", this.state.matchList);
            alert(random);
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
