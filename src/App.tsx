import React from 'react';
import {log} from "util";


function App() {
    // const HelloKolya = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello my friend Kolya')
    // }
    // const HelloKolya = (name: string) => {
    //     console.log((name))
    // }
    const button1 = () => {
        console.log("Button number 1")
    }

    const button2 = (text: string) => {
        console.log(text)
    }


    return (
        <div className={"App"}>
            {/*<button onClick={() => {*/}
            {/*    console.log('Hello')*/}
            {/*}}>click*/}
            {/*</button>*/}
            {/*<button onClick={() => {HelloKolya('Kolya')}}>button2</button>*/}
            <button onClick={button1}>1</button>
            <button onClick={()=>{button2('Button2')}}>2</button>

        </div>
    );
}

export default App;
