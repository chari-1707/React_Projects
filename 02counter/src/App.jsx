// import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(15);
    // This function returns an array contains first as variable and second as method feel free to name as you like
    // in the useState we pass the initial val need not tobe a number we can use diff. data types even we can pass methods too.

    // let counter = 15;

    const addValue = () => {
        setCounter(counter + 1); // setCounter is responsible for rendering and updating the value of the negihbouring variable
        // we pass here what's need to update like that
    };

    const removeValue = () => {
        counter = counter - 1;
        setCounter(counter);
    };

    return (
        <>
            <h1>React course with Chari {counter}</h1>
            <h2>Counter value : {counter} </h2>
            <button onClick={addValue}>Add value</button> <button onClick={removeValue}>remove value</button>
            <p>footer: {counter} </p>
        </>
    );
}

export default App;
