import React, { useState, Fragment } from "react";

function Users() {
    let [count, setCount] = useState(0);
    return (
        <Fragment>
            <h4>List of users {count}</h4>
            <button onClick={() => setCount((count = count + 1))}>add 1</button>
        </Fragment>
    );
}

export default Users;
