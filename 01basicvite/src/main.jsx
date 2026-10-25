import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    Children: "Click me to visit google",
}; // in custom react we looped through but dont know whether the react loops ?? we will check that out

function myApp() {
    return (
        <div>
            <h1>custom react app</h1>
        </div>
    );
}

const AnotherElement = (
    <a href="https://google.com" target="_blank">
        Visit Google
    </a>
);

// if you wanna create a react element this is the syntax that we need to follow the order is also important type, props, children
const areactElement = React.createElement(
    // This is the object version of Another Element
    "a",
    { href: "https://google.com", target: "_blank" },
    "click to visit google",
    //" " --> // in this place actually what ever we write in the {} that is taken from there and placed here
);

createRoot(document.getElementById("root")).render(
    // <myApp />

    // AnotherElement,

    // reactElement,This doesn't works because in there we created type, props, children on my own i gave the definition for them but how come react understands that so it wont work

    // areactElement,

    <App />,
);
