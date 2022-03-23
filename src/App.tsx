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
           {message.map((el, index) => {
           return(
               <div key={index}>{el.message}</div>
           )
       })}
       </div>
    );
}

export default App;
