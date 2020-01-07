import React from "react";
import { Spin, Menu, Button, Dropdown, Icon } from "antd";
import Sound from "react-sound";
import bell from "./bell.mp3";
const memberList = [
    "1. Abhishek",
    "2. Amar",
    "3. Anand",
    "4. Aniket",
    "5. Ashu",
    "6. Dharmesh",
    "7. Harsh",
    "8. Hemprasad",
    "9. Karan",
    "10. Kartikey",
    "11. Keshav",
    "12. Kumar Gaurav",
    "13. Kumari Saroj",
    "14. Mukul",
    "15. Raj",
    "16. Rohit",
    "17. shubhi",
    "18. Vanya",
    "19. Vikram",
    "20. Vishal"
];
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchList: [
                "1. Abhishek",
                "2. Amar",
                "3. Anand",
                "4. Aniket",
                "5. Ashu",
                "6. Dharmesh",
                "7. Harsh",
                "8. Hemprasad",
                "9. Karan",
                "10. Kartikey",
                "11. Keshav",
                "12. Kumar Gaurav",
                "13. Kumari Saroj",
                "14. Mukul",
                "15. Raj",
                "16. Rohit",
                "17. shubhi",
                "18. Vanya",
                "19. Vikram",
                "20. Vishal"
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
    searchSanta = member => {
        this.setState({ loader: true });
        var array = [...this.state.matchList]; // make a separate copy of the array
        let random = "";
        if (array.length > 0) {
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
        }, 1000);
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
                    <div>
                        <Spin />
                        <Sound
                            url={bell}
                            playStatus={Sound.status.PLAYING}
                            playFromPosition={300 /* in milliseconds */}
                            onLoading={this.handleSongLoading}
                            onPlaying={this.handleSongPlaying}
                            onFinishedPlaying={this.handleSongFinishedPlaying}
                        />
                    </div>
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
