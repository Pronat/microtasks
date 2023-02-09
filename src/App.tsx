import React from 'react';
import {log} from "util";
import {Button} from "./components/Button";


function App() {
    const onclickHandler = () => {
        console.log(`Hello my friend Vasya`)
    }
    const whatTimeHandler = () => {
        console.log('Date')
    }



    return (
        <div className={"App"}>
           <Button title={'1'} callBack={onclickHandler} />
           <Button title={'2'} callBack={whatTimeHandler}/>
        </div>
    );
}

export default App;
