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
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchList: [
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
            ],
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
        this.setState({ loader: true });
        var array = [...this.state.matchList]; // make a separate copy of the array
        let random = "";
        if (array.length > 1) {
            var index = await array.indexOf(member);
            await array.splice(index, 1);
            random = await array[Math.floor(Math.random() * array.length)];
            let deleteSantaIndex = await array.indexOf(random);
            await array.splice(deleteSantaIndex, 1);
            await array.push(member);
            await this.setState({ matchList: array, matchSanta: random });
        } else {
            random = array[0];
            await this.setState({ matchSanta: random });
        }

        setTimeout(() => {
            this.setState({ loader: false });
        }, 1000);
    };
    //
    memberList() {
        return memberList.map(member => (
            <Menu.Item key={member}>{member}</Menu.Item>
        ));
    }
    render() {
        console.log("length", this.state.matchList.length);
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
                        {/* Hi {this.state.playingMember} your secrent sanata is
                        {this.state.matchSanta} */}
                        <div>{this.state.matchList.map((data)=>return(<span>data</span>))}</div>
                    </div>
                )}
            </div>
        );
    }
}
