import React from "react";
import { Spin, Menu, Button, Dropdown, Icon } from "antd";
import Sound from "react-sound";
import bell from "./bell.mp3";
const memberList = [
    "Abhishek",
    "Amar",
    "Anand",
    "Aniket",
    "Ashu",
    "Dharmesh",
    "Harsh",
    "Hemprasad",
    "Karan",
    "Kartikey",
    "Keshav",
    "Gaurav",
    "Saroj",
    "Mukul",
    "Raj",
    "Rohit",
    "Shubhi",
    "Vanya",
    "Vikram",
    "Vishal"
];
var matchList = [
    "Abhishek",
    "Amar",
    "Anand",
    "Aniket",
    "Ashu",
    "Dharmesh",
    "Harsh",
    "Hemprasad",
    "Karan",
    "Kartikey",
    "Keshav",
    "Gaurav",
    "Saroj",
    "Mukul",
    "Raj",
    "Rohit",
    "Shubhi",
    "Vanya",
    "Vikram",
    "Vishal"
];
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    searchSanta = async member => {
        //console.log("reacived member", member);
        this.setState({ loader: true });
        var array = matchList; // make a separate copy of the array
        let random = "";
        if (array.length > 1) {
            var index = await array.indexOf(member);
            if (index !== -1) {
                await array.slice(index, 1);
            }
            random = await array[Math.floor(Math.random() * array.length)];
            let deleteSantaIndex = await array.indexOf(random);
            await array.slice(deleteSantaIndex, 1);
            await array.push(member);
            await this.setState({ matchSanta: random, loader: false });
            matchList = array;
        } else {
            random = array[0];
            await this.setState({ matchSanta: random, loader: false });
        }
        // let random = "";
        // const items = await this.state.matchList.filter(
        //     item => item !== member
        // );
        // if (items.length > 0) {
        //     random = await items[Math.floor(Math.random() * items.length)];
        // }
        // let finalarray = items.filter(item => item !== random);
        // finalarray.push(member);
        // console.log("Filter items", items);
        // this.setState({ items: items });
        // setTimeout(() => {
        //     this.setState(prevState => ({
        //         loader: false,
        //         matchList: finalarray,
        //         matchSanta: random
        //     }));
        // }, 1000);
    };
    //
    memberList() {
        return memberList.map(member => (
            <Menu.Item key={member}>{member}</Menu.Item>
        ));
    }
    render() {
        //console.log("length", matchList.length);
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
                    <div>
                        <Spin />
                        <Sound
                            url={bell}
                            playStatus={Sound.status.PLAYING}
                            playFromPosition={300 /* in milliseconds */}
                            // onLoading={this.handleSongLoading}
                            // onPlaying={this.handleSongPlaying}
                            // onFinishedPlaying={this.handleSongFinishedPlaying}
                        />
                    </div>
                ) : (
                    <div>
                        Hi {this.state.playingMember} your secrent sanata is
                        {this.state.matchSanta}
                        <div>
                            {matchList.map(data => {
                                return <div>{data}</div>;
                            })}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
