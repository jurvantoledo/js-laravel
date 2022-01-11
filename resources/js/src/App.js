import React from "react";
import ReactDOM from 'react-dom';
import Example from "./components/Example";

function App() {
    return (
        <div className="app">
            <h1 className="text-3xl font-bold underline">Hello world! </h1>
            <p className="font-bold">App</p>
            <Example />
        </div>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}