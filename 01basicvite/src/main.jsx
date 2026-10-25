import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function myApp() {
    return (
        <div>
            <h1>custom react app</h1>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<myApp />);
