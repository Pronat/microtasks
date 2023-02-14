import React, {Dispatch, SetStateAction} from 'react';

type InputPropsType = {
    setTitle: Dispatch<SetStateAction<string>>
}
export const Input = (props: InputPropsType) => {
    let onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (

            <input onChange={onChangeHandler}/>

    );
};

