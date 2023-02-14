import React, {Dispatch, SetStateAction} from 'react';

type ButtonPropsType = {
    name: string
    CallBack: () => void
    title: string
    setTitle: Dispatch<SetStateAction<string>>
}
export const Button = (props: ButtonPropsType) => {
    const ButtonHandler = () => {
        props.CallBack()
        props.setTitle('')
    }
    return (
            <button onClick={ButtonHandler}>{props.name}</button>
    );
};
