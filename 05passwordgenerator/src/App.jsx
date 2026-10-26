import { useState, useCallback, useEffect, useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [charsAllowed, setCharsAllowed] = useState(false);
    const [numsAllowed, setNumsAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const generatePassoword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numsAllowed) str += "0123456789";
        if (charsAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numsAllowed, charsAllowed]); // as soon as these dependcies wont change keep the same function reference if any of these value changes create a new fuction so we wont add the password field here because its constantly changing

    const copyPasswordToClipboard = () => {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, 999); //selects the text from 0 - 999 range or what ever range that you specify
        // window.navigator.clipboard.writeText(password);

    };

    useEffect(() => {
        generatePassoword();
    }, [length, charsAllowed, numsAllowed]); // as soon as these dependencies changes , this will trigger and works

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
                    <button
                        onClick={copyPasswordToClipboard}
                        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                    >
                        copy
                    </button>
                </div>

                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            ref={passwordRef}
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

/**
 const myFunction = useCallback(() => {
    // your logic here
}, [dependency1, dependency2]);

Think of the dependency array as telling React: 
"These are the values my function relies on. If one changes, my cached function may need to be updated."

**/
