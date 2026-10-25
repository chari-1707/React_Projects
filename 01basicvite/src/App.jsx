import Youtube from "./Youtube.jsx";

function App() {
    const username = "chari";
    return (
        <>
            <h1>Vite React App {2 + 2}</h1>
            <h1>Vite React App {username}</h1>
            <Youtube />
        </>
    );
}

/* here what ever we do in {} this will be kept as it is while decoding as we see in main.jsx with different
            examples like AnotherElement, areactElement // and another imp is we can only keep the expressions that can
            be evaluatable not smthg like if(username === "chari") "Yes" : "No" becoz this expression it self needs to
            evaluated so it give console.error 
            */

export default App;
