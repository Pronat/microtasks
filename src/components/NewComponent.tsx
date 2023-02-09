import React from 'react';
import {Button} from "./Button";
import {FilterType, MoneyType} from "../App";

type NewComponentType = {
    newMoney: Array<MoneyType>
    showMeHandler: (title: FilterType) => void
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <div className={"App"}>
            <div>
                {
                    props.newMoney.map((el, index) => {
                        return (
                            <div key={index}>
                                <span>{el.value} </span>
                                <span>{el.banknots}</span>
                                <span>{el.number} </span>
                            </div>

                        )
                    })
                }
            </div>
            <Button title={'all'} callBack={() => {
                props.showMeHandler('all')
            }}/>
            <Button title={'Dollars'} callBack={() => {
                props.showMeHandler('Dollars')
            }}/>
            <Button title={'RUBLS'} callBack={() => {
                props.showMeHandler('RUBLS')
            }}/>


        </div>
    );
};