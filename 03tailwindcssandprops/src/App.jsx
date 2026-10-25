import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Card from "./components/Card.jsx";

let myObj = {
    name: "Chari",
    age: 19,
    address: {
        city: "Guntur",
        state: "Andhra Pradesh",
        country: "India",
    },
};

let newArr = [1, 3, 4, 5, 6, 6, 7, 7];

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-3xl bg-black"> vite with Tailwaind</h1>
            <Card username="chari" myArr={newArr} />
            <Card />
            <Card />
            <Card />
        </>
    );
}

export default App;
