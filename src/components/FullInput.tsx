import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    setNewMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')
    const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const ButtonHandler = () => {
        props.setNewMessage(title)
    }
    return (
        <div>
            <input onChange={InputHandler}/>
            <button onClick={ButtonHandler}>+</button>
        </div>

    );
};
