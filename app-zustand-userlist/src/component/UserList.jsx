import React, { useState } from "react";
import useStoreUsers from "../store/useStoreUsers";

function UserList() {

    const users = useStoreUsers((state) => state.users);
    const removeUser = useStoreUsers((state) => state.removeUser);

    return (
        <div>
            <h1>List of users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}{" "}
                        <button onClick={() => removeUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;