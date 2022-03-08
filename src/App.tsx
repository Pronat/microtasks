import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponents} from "./components/NewComponents";

function App() {
    return (
    <div className="App">
     <button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChannel-1</button>
     <button onClick={(event)=>{console.log("Hello!")}}>MyYouTubeChannel-2</button>
    </div>
  );
}



export default App;
