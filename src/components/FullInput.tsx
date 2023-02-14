import React, {useState} from 'react';

type FullInputType = {
    addMessage: () => void
}

export const FullInput = (props: FullInputType) => {
    let [newMessage, setNewMessage] = useState('')
    const onClickHandeler = () => {

    }
    const onChangeHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
       setNewMessage(e.currentTarget.value)
        console.log(newMessage)
    }
    return (
        <div>
            <input onChange={onChangeHandeler} style={{marginLeft: "20px"}}/>
            <button onClick={()=>{}}>add Message</button>
        </div>

    )
};
