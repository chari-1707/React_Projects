import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext.js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext); // we extract the data from the userContext

    const handleSubmit = e => {
        e.preventDefault();
        setUser({ username, password }); // here we used it and this will push the data into the GLOBAL
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
            />{" "}
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
