import React, {useState} from 'react';
import {log} from "util";
import {Button} from "./components/Button";
import {NewComponent} from "./components/NewComponent";

export type FilterType = 'all' | 'Dollars' | 'RUBLS'
export type MoneyType = {
    banknots: string
    value: number
    number: string
}
function App() {
    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<FilterType>('all')
    let newMoney = money
    if (filter === 'Dollars') {
        newMoney = money.filter((el) => el.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        newMoney = money.filter((el) => el.banknots === 'RUBLS')
    }

    const showMeHandler = (title: FilterType) => {
        setFilter(title)
        }


        return (
            <NewComponent
                newMoney={newMoney}
                showMeHandler={showMeHandler}
            />
            // <div className={"App"}>
            //     <div>
            //         {
            //             newMoney.map((el, index) => {
            //                 return (
            //                     <div key={index}>
            //                         <span>{el.value} </span>
            //                         <span>{el.banknots}</span>
            //                         <span>{el.number} </span>
            //                     </div>
            //
            //                 )
            //             })
            //         }
            //     </div>
            //     <Button title={'all'} callBack={() => {
            //         showMeHandler('all')
            //     }}/>
            //     <Button title={'Dollars'} callBack={() => {
            //         showMeHandler('Dollars')
            //     }}/>
            //     <Button title={'RUBLS'} callBack={() => {
            //         showMeHandler('RUBLS')
            //     }}/>
            //
            //
            // </div>
        );
    }
    export default App;
