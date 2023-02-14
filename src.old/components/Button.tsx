import React from 'react';

type ButtonPropsType = {
    callBack: () => void
    name: string
}
export const Button = (props: ButtonPropsType) => {
    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onclickHandler}>props.name</button>
    )
}


