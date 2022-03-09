import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber:string,age:number, address:string) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber:string,age:number) => {
        console.log(subscriber, age)
    }

    return (
        <div className="App">
            <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo( 'I am Vasa', 21, 'live in Minsk')}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo('I am Ivan',27)}/>

        </div>
    )
        ;
}


export default App;
