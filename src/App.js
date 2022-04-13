import './App.css';
import React, { Component, useState  } from 'react'
import generator from "generate-password";
import {render} from "react-dom";

function App()  {
  const [password, setPassword] = useState('Here will be your password');
    const [isSymbols, setIsSymbols] = useState(false);

    function fun1(){
        var rng = document.getElementById('r1'); //rng - это ползунок
        var p=document.getElementById('one'); // p - абзац
        p.innerHTML=rng.value;
        length = rng.value;

    }

  const createPassword = () => {

      const pwd = generator.generate({

          length: length,
          lowercase: true,
          uppercase: true,
          numbers: true,
          symbols: isSymbols,
    });
    setPassword(pwd);
    console.log(password);
    console.log(length);
  }

  const savePassword = () => {

  }


    return  (

        <div>
            <p className="title">New Password</p>
           <div className="main__inter">
          <div className="password__style">
            <p>{password}</p>
          </div>
               <div className="input">
                   <input min="5" max="25" type="range" id="r1" onChange={fun1}/>
                   <p id="one">{length}</p>
               </div>

          <button onClick={createPassword} className="button">Create</button>

           </div>
</div>
    )

}



export default App;
