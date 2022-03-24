import React, {useState} from 'react';
import FullInput from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message,])
    }

    return (
        <div className={"App"}>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <Input />
            <Button />

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
