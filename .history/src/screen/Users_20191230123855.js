import React, { useState } from "react";

function Users() {
    const [count, setCount] = useState(0);
    return <h4>List of users {count}</h4>;
}

export default Users;
