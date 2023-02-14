import React, {useState} from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";



function App() {

   let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (text: string) => {
       setMessage([{message: text},...message])
    }

    let [title, setTitle] = useState('')

    const addNewMessage = () => {
       setMessage([{message: title}, ...message])
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
            {/*<FullInput addMessage={addMessage} />*/}
            <div style={{marginLeft: "20px"}}>
                <Input setTitle={setTitle}/>
                <Button title={title} name={'+'} CallBack={addNewMessage}/>
            </div>

        </div>
    )
}

export default App;
