import React, {useState} from 'react';

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
       <div className={"App"}>
           <div>
               <input/>
               <button>+</button>
           </div>
       </div>
    );
}

export default App;
