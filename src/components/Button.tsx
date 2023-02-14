import React from 'react';

type ButtonPropsType = {
    name: string
    CallBack: () => void
    title: string
}
export const Button = (props: ButtonPropsType) => {
    const ButtonHandler = () => {
        props.CallBack()
    }
    return (
            <button onClick={ButtonHandler}>{props.name}</button>
    );
};
