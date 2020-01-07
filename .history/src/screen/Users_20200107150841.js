import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser, addition } from "../store/actions";

function Users(props) {
    let [count, setCount] = useState(0);
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        props.getUser();
        const fetchData = async () => {
            const result = await axios(
                "https://hn.algolia.com/api/v1/search?query=redux"
            );
            console.log("recived data", result);
            setData(result.data);
        };
        fetchData();
    }, []);
    console.log("set data", data);
    return (
        <Fragment>
            <h4>List of users {count}</h4>
            <button onClick={() => props.addition(1)}>add 1</button>
        </Fragment>
    );
}

const mapStateToProps = state => {
    console.log("recived state", state);
    return {
        loading: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser()),
        addition: data => dispatch(addition(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
