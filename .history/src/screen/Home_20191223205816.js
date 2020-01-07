import React from "react";
import { Spin, Menu, Button, Dropdown, Icon } from "antd";
import Sound from "react-sound";
import ReactAudioPlayer from "react-audio-player";
import bell from "./bell.mp3";
import SnowStorm from "react-snowstorm";
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
    componentDidMount() {
        this.setState({ bell });
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
        //var array = [...matchList]; // make a separate copy of the array
        console.log("orignal array", matchList);
        let random = "";
        if (matchList.length > 1) {
            var index = await matchList.indexOf(member);
            if (index !== -1) {
                // console.log("orignal array index find");
                await matchList.splice(index, 1);
                // console.log("orignal array index find final", matchList);
                random = await matchList[
                    Math.floor(Math.random() * matchList.length)
                ];
                let deleteSantaIndex = await matchList.indexOf(random);
                // console.log("delted random index", deleteSantaIndex);
                await matchList.splice(deleteSantaIndex, 1);
                await matchList.push(member);
                await this.setState({ matchSanta: random });
            } else {
                random = await matchList[
                    Math.floor(Math.random() * matchList.length)
                ];
                let deleteSantaIndex = await matchList.indexOf(random);
                await matchList.splice(deleteSantaIndex, 1);
                await this.setState({ matchSanta: random });
            }
        } else {
            random = matchList[0];
            await this.setState({ matchSanta: random });
        }

        setTimeout(() => {
            this.setState(prevState => ({
                loader: false
            }));
        }, 20000);
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
                <SnowStorm />
                <h1 className="white">Happy christmas team Mckinley&Rice</h1>
                <div className="main-container">
                    <div className="left">
                        <h3 className="white">
                            A gift for you, you don’t know who. Must be Secret
                            Santa.
                        </h3>
                        <div className="selctor">
                            <Dropdown
                                overlay={this.menu}
                                className="dropdown-lg"
                            >
                                <Button>
                                    {this.state.playingMember}
                                    <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="middle">
                        <img src={require("./tree.gif")} alt="loading..." />
                    </div>
                    <div className="right">
                        {this.state.loader ? (
                            <div>
                                {/* <Spin /> */}
                                <img
                                    src={require("./santa.gif")}
                                    alt="loading..."
                                />
                                {/* <Sound
                                    url=
                                    playStatus={Sound.status.PLAYING}
                                    playFromPosition={300} // in milliseconds
                                    onLoading={this.handleSongLoading}
                                    onPlaying={this.handleSongPlaying}
                                    onFinishedPlaying={
                                        this.handleSongFinishedPlaying
                                    }
                                /> */}
                                <ReactAudioPlayer
                                    src={this.state.bell}
                                    autoPlay={true}
                                />
                            </div>
                        ) : (
                            <div className="result white">
                                <h2 className="white">
                                    Hi{" "}
                                    <span className="red">
                                        {this.state.playingMember}
                                    </span>{" "}
                                    your secrent sanata is{" "}
                                    <span className="red">
                                        {this.state.matchSanta}
                                    </span>
                                </h2>
                                {/* <div>
                                {matchList.map(data => {
                                    return <div>{data}</div>;
                                })}
                            </div> */}
                            </div>
                        )}
                        <div className="powerby">
                            <span className="white">Developed By </span>
                            <br></br>
                            <span className="white">Raj: The mystery man</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
