import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
    const [color, setColor] = useState("olive");

    function changeColor(color) {
        setColor(color);
    }

    return (
        <div className="w-full h-screen duration-0 bg-black" style={{ backgroundColor: color }}>
            <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button
                        onClick={() => changeColor("red")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => changeColor("green")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    >
                        Green
                    </button>
                    <button
                        onClick={() => changeColor("blue")}
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                    >
                        Blue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

/*

we are passing an function to onclick because on click accepts the fucntion and exceute you cannot directly write the chnagecolor(red) like this
becoz it returns a val but onClick doesn't satisfies it.


another thing is why to declare the separate function instead we have setColor method so directly use instead of changeColor
*/
