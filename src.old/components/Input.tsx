import React from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}
export const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeHandler}/>
        )

};

