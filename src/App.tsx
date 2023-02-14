import React, {useState} from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    const getNewMessage = () => {
        setMessage([{message: title}, ...message])
    }

    return (
        <div style={{margin: "20px"}}>
            <Input setTitle={setTitle}/>
            <Button name={'add message'} callBack={getNewMessage}/>
        </div>
    )
}

export default App;
