import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";


function App() {

   let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const setNewMessage = (title: string) => {
        setMessage(`message: ${title}`)
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <FullInput setNewMessage={setNewMessage}/>
            {
                message.map((el, index) => <li key={index} style={{marginLeft: '20px'}}>{el.message}</li>)
            }
        </div>
    )
}

export default App;
