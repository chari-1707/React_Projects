import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [charsAllowed, setCharsAllowed] = useState(false);
    const [numsAllowed, setNumsAllowed] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className="text-white text-center my-3">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="password"
                        readOnly
                    />
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
                </div>

                <div className="flex text-sm gap-x-2">

                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={e => setLength(e.target.value)}
                            id="length"
                        />
                        <label htmlFor="length">{length}</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numsAllowed}
                            onChange={() => {
                                setNumsAllowed(prev => !prev);
                            }}
                            id="number"
                        />
                        <label htmlFor="number">Numbers</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charsAllowed}
                            id="characterInput"
                            onChange={() => {
                                setCharsAllowed(prev => !prev);
                            }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default App;
