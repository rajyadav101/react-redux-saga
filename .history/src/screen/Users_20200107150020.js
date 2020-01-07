import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../store/actions";

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
            <button onClick={() => setCount((count = count + 1))}>add 1</button>
        </Fragment>
    );
}

const mapStateToProps = state => {
    // return {
    //   loading: state.auth.loading
    // };
    console.log("recived state");
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
