import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
function Users() {
    let [count, setCount] = useState(0);
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://hn.algolia.com/api/v1/search?query=redux"
            );
            console.log("recived data", result);
            setData(result.data);
            console.log("set data", data);
        };
        fetchData();
    }, []);

    return (
        <Fragment>
            <h4>List of users {count}</h4>
            <button onClick={() => setCount((count = count + 1))}>add 1</button>
        </Fragment>
    );
}

export default Users;
