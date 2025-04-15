import React, { useState } from "react";
import useStoreUsers from "../store/useStoreUsers";

function AddUser() {

    const [name, setName] = useState('');
    const addUser = useStoreUsers((state) => state.addUser);

    const handleSubmit = () => {
        addUser({ id: Date.now(), name});
        setName('');
    };

    return (
        <div>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username" 
            />
            <button onClick={handleSubmit}>Add User</button>
        </div>
    );
}

export default AddUser;