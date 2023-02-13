import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {
    let [title, setTitle] = useState('')
    const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const ButtonHandler = () => {

    }
    return (
        <div>
            <input onChange={InputHandler}/>
            <button onClick={()=>{ButtonHandler()}}>+</button>
        </div>

    );
};
