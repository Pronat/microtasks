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
        setTitle('')
    }

    return (
        <div  style={{margin: "20px"}}>
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'add message'} callBack={getNewMessage}/>
            </div>
            <div>
                {
                    message.map((el, index) => <li key={index}>{el.message}</li>)
                }
            </div>
        </div>

    )
}

export default App;
