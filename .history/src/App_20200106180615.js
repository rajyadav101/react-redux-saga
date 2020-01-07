import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./screen/Users";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchStore } from "../src/store/sagas";
import reducer from "../src/store/reducers";

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(watchStore);
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/* <Home /> */}
                <Users />
            </div>
        </Provider>
    );
}

export default App;
