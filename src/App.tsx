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

    const showMeHandler = (currency: string) => {
        console.log(`Show me ${currency}`)
    }

    return (
        <div className={"App"}>
            <Button title={'Dollars'}/>
            <Button title={'RUBLS'}/>

        </div>
    );
}

export default App;
