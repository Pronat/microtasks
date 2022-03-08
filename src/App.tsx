import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponents} from "./components/NewComponents";

function App() {
  return (
    <div className="App">
     <NewComponents students={students} />
    </div>
  );
}

export default App;
