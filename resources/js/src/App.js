import React from "react";
import ReactDOM from 'react-dom';
import PageRoutes from "./PageRoutes"

function App() {
    return (
        <div className="app">
            <PageRoutes />
        </div>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}