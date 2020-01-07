import React from "react";
import { Spin, Menu, Button, Dropdown, Icon } from "antd";

const memberList = ["Raj", "Vishal", "Adam", "Nik", "Smith"];
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchList: ["Raj", "Vishal", "Adam", "Nik", "Smith"],
            playingMember: "Find Your Santa",
            matchSanta: "",
            loader: true
        };
    }
    menu = () => (
        <Menu
            onClick={e => {
                this.setState({ playingMember: e.key });
                this.searchSanta(e.key);
            }}
        >
            {this.memberList()}
        </Menu>
    );
    //Search member santa
    searchSanta = member => {
        var array = [...this.state.matchList]; // make a separate copy of the array
        let random = "";
        if (array.length > 1) {
            var index = array.indexOf(member);
            array.splice(index, 1);
            random = array[Math.floor(Math.random() * array.length)];
            let deleteSantaIndex = array.indexOf(random);
            array.splice(deleteSantaIndex, 1);
            array.push(member);
        } else {
            random = array[0];
        }
        this.setState({ matchList: array, matchSanta: random });
        setTimeout(() => {
            this.setState({ loader: false });
        }, 4000);
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
                <div className="selctor">
                    <Dropdown overlay={this.menu} className="dropdown-lg">
                        <Button>
                            {this.state.playingMember}
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>

                {this.state.loader ? (
                    <Spin />
                ) : (
                    <div>
                        Hi {this.state.playingMember} your secrent sanata is
                        {this.state.matchSanta}
                    </div>
                )}
            </div>
        );
    }
}
