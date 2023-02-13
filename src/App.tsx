import React, {useState} from 'react';


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
        <div>
            <div>
                <input/>
                <button>+</button>
            </div>
            {
                message.map((el, index) => <li key={index} style={{marginLeft: '20px'}}>{el.message}</li>)
            }
        </div>
    )
}

export default App;
