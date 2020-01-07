import React from "react";
import { Spin } from "antd";

const member = ["Raj", "Vishal", "Adam", "Nik", "Smith"];
export default class Home extends React.Component {
    constructor(props) {
        this.state = {
            matchList: ["Raj", "Vishal", "Adam", "Nik", "Smith"]
        };
    }
    render() {
        return (
            <div>
                <Spin />
            </div>
        );
    }
}
