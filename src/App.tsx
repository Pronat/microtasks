import React from 'react';
import {log} from "util";


function App() {
    // const HelloKolya = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello my friend Kolya')
    // }
    const HelloKolya = (name: string) => {
        console.log((name))
    }

    return (
        <div className={"App"}>
            <button onClick={() => {
                console.log('Hello')
            }}>click
            </button>
            <button onClick={() => {HelloKolya('Kolya')}}>button2</button>
        </div>
    );
}

export default App;
