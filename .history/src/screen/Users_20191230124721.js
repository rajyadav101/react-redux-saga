import React, { useState, Fragment } from "react";

function Users() {
    let [count, setCount] = useState(0);
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://hn.algolia.com/api/v1/search?query=redux"
            );
            setData(result.data);
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
