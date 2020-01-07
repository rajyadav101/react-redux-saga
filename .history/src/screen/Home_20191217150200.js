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
            loader:true;
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
        //console.log("revived mamber", member);
        var array = [...this.state.matchList]; // make a separate copy of the array
        let random = "";
        if (array.length > 1) {
            var index = array.indexOf(member);
            console.log("index", index);

            //console.log("Before delete", array);
            array.splice(index, 1);
            //console.log("after delete", array);

            random = array[Math.floor(Math.random() * array.length)];
            let deleteSantaIndex = array.indexOf(random);
            array.splice(deleteSantaIndex, 1);
            array.push(member);
        } else {
            random = array[0];
        }
        //console.log("selected random", random);

        console.log("pushed member after", array);
        this.setState({ matchList: array, matchSanta: random });
        //console.log("state after adding", this.state.matchList);
        // alert(random);
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

                {this.state.loader?
                <spin/>:
                <div>
                    Hi {this.state.playingMember} your secrent sanata is
                    {this.state.matchSanta}
                </div>}
            </div>
        );
    }
}
