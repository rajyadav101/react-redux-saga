import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { connect } from "react-redux";
import { getUser, addition } from "../store/actions";

function Users(props) {
    let [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        props.getUser();
    }, []);
    return (
        <Fragment>
            {props.loading ? (
                <Spin />
            ) : (
                <Fragment>
                    <h3>React Redux Saga APIsauce</h3>
                    <h4>{props.count}</h4>
                    <button onClick={() => props.addition(1)}>add 1</button>
                    {props.data.map((user, index) => (
                        <div key={index}>{user.title}</div>
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
}

const mapStateToProps = state => {
    console.log("recived state", state);
    return {
        count: state.store.total,
        data: state.store.users,
        loading: state.store.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser()),
        addition: data => dispatch(addition(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
