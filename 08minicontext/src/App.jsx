import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UesrContextProvider";

function App() {
    const [count, setCount] = useState(0);

    return (
        <UserContextProvider>
            <h1>React video for context API</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    );
}

export default App;
