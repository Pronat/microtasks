import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import Input from "./components/Input";
import Button from "./components/Button";



function App() {

   let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (text: string) => {
       setMessage([{message: text},...message])
    }

    return (
        <div>
            {
                message.map((el, index)=> {
                    return (
                        <li key={index} style={{marginLeft: "20px"}}>{el.message}</li>
                    )
                } )
            }
            <FullInput addMessage={addMessage} />
            <Input />
            <Button />
        </div>
    )
}

export default App;
