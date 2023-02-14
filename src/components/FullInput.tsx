import React, {useState} from 'react';

type FullInputType = {
    addMessage: (text: string) => void
}

export const FullInput = (props: FullInputType) => {
    let [newMessage, setNewMessage] = useState('')
    const onClickHandeler = () => {
        props.addMessage(newMessage)
        setNewMessage('')
    }
    const onChangeHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
       setNewMessage(e.currentTarget.value)
        console.log(newMessage)
    }
    return (
        <div>
            <input value={newMessage} onChange={onChangeHandeler} style={{marginLeft: "20px"}}/>
            <button onClick={onClickHandeler}>add Message</button>
        </div>

    )
};
