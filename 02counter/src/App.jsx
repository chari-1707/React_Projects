// import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(15);
    // This function returns an array contains first as variable and second as method feel free to name as you like
    // in the useState we pass the initial val need not tobe a number we can use diff. data types even we can pass methods too.

    // let counter = 15;

    const addValue = () => {
        // setCounter(counter + 1); // setCounter is responsible for rendering and updating the value of the negihbouring variable
        // we pass here what's need to update like that
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        //we assume that when we click the add val the current val increase's by 4 but it doesn't because of batching we will learn later
        // if you want so then we do like

        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);

        // why this works is prevCounter will get's the most updated counter value prevCounter is nothing but Counter itself just a naming convention not really
        //after 1st function completion counter get's updated and prevcounter gets the updated too so it works.
        //unlike in counter+1 ever counter has the same value as 15 and after updation it will get value 16
    };

    const removeValue = () => {
        // counter = counter - 1;
        // setCounter(counter);
        setCounter(counter - 1);
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
