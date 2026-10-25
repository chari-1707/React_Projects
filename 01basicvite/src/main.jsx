import { createRoot } from "react-dom/client";
import App from "./App.jsx";

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



createRoot(document.getElementById("root"))
    .render
    // <myApp />

    // AnotherElement,

    // reactElement,This doesn't works because in there we created type, props, children on my own i gave the definition for them but how come react understands that so it wont work
    ();
