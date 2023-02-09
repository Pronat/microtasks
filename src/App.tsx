import React from 'react';
import {log} from "util";
import {Button} from "./components/Button";


function App() {
    const onclickHandler = (name: string) => {
        console.log(`Hello my friend ${name}`)
    }
    const whatTimeHandler = (name: string) => {
        console.log(`Date: ${name}`)
    }



    return (
        <div className={"App"}>
           <Button title={'1'} callBack={ () => {onclickHandler('Vasya')}} />
           <Button title={'2'} callBack={ () => {whatTimeHandler('2023')}} />
        </div>
    );
}

export default App;
