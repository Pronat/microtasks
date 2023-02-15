import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: any
    setFilterValue: any // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilterValue('All')
        // засетаем 'All'
    }

    const setDollars = () => {
        props.setFilterValue('Dollars')
        // засетаем 'Dollars'
    }

    const setRUBLS = () => {
        props.setFilterValue('RUBLS')
        // засетаем 'RUBLS'
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};
