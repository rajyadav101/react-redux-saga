import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./screen/Users";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            <Users />
        </div>
    );
}

export default App;
