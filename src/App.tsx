import React, {useState} from 'react';
import {log} from "util";
import {Button} from "./components/Button";


function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const showMeHandler = (title: string) => {
         const money2 = money.filter((el)=> el.banknots === title)
        if (money2) {
            console.log(money2)
        }
    }

    let [number, setNumber] = useState(0)
    const add1Handler = () => {
        setNumber(++number)
    }
    const set0Handler = () => {
        setNumber(0)
    }

    return (
        <div className={"App"}>
            <Button title={'Dollars'} callBack={()=>{showMeHandler('Dollars')}}/>
            <Button title={'RUBLS'} callBack={()=>{showMeHandler('RUBLS')}}/>

            <button onClick={add1Handler}>add 1</button>
            <button onClick={set0Handler}>set 0</button>
            <div>{number}</div>
        </div>
    );
}

export default App;
