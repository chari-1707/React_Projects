import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>React video for context API</h1>
            <Login />
            <Profile />
        </>
    );
}

export default App;
