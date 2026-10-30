import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { TodoProvider } from "./context";

function App() {
    const [count, setCount] = useState(0);

    return (
        <TodoProvider>
            <h1 className="text-3xl font-bold underline">Hello World!</h1>
        </TodoProvider>
    );
}

export default App;
