import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Card from "./components/Card.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-3xl bg-black"> vite with Tailwaind</h1>
            <Card />
        </>
    );
}

export default App;
