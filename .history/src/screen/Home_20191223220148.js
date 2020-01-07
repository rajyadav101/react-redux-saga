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
            loader: false,
            first: null
        };
    }
    componentDidMount() {
        this.setState({ bell });
    }
    menu = () => (
        <Menu
            onClick={e => {
                this.setState({ playingMember: e.key, loader: true });

                this.searchSanta(e.key);
            }}
        >
            {this.memberList()}
        </Menu>
    );
    //Search member santa
    searchSanta = async member => {
        //console.log("reacived member", member);
        //this.setState({ loader: true, first: 1 });
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
        var delplayer = await memberList.indexOf(member);
        if (delplayer !== -1) {
            // console.log("orignal array index find");
            await memberList.splice(delplayer, 1);
        }
        setTimeout(() => {
            this.setState(prevState => ({
                loader: false
            }));
        }, 25000);
    };
    //
    memberList() {
        return memberList.map(member => (
            <Menu.Item key={member}>{member}</Menu.Item>
        ));
    }
    render() {
        console.log("loader state", this.state.loader);

        return (
            <div>
                <SnowStorm />
                <h1 className="white" style={{ margin: "50px" }}>
                    Happy Christmas Team Mckinley&Rice
                </h1>
                <div className="main-container">
                    <div className="left">
                        <h2 className="white">
                            A gift for you, you don’t know who. Must be Secret
                            Santa.
                        </h2>
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
                                {this.state.loader && (
                                    <ReactAudioPlayer
                                        src={this.state.bell}
                                        autoPlay={true}
                                    />
                                )}
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
                            <h4 className="white">Developed By </h4>
                            <h4 className="white">Raj: The mystery man</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
