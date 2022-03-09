import React from 'react';
import './App.css';

function App() {
    let a = 1
    const onClickHandler = () => {
        ++a
        console.log(a)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
        </div>
    )
        ;
}


export default App;
