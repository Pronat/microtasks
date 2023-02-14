import React, {Dispatch, SetStateAction} from 'react';

type InputPropsType = {
    title: string
    setTitle: Dispatch<SetStateAction<string>>
}
export const Input = (props: InputPropsType) => {
    let onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (

            <input value={props.title} onChange={onChangeHandler}/>

    );
};

