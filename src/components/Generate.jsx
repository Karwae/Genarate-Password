import React from 'react';
import { useState } from 'react';

const Generate = () =>{

    const [password, setPassword] = useState('');


    // passwordEl.addEventListener('focus', (e) => {
    //   navigator.clipboard.writeText(passwordEl.value);
    // });
    


    
    function generatePassword() {
      const numberChars = "0123456789";
      const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerChars = "abcdefghijklmnopqrstuvwxyz";
      const symbolChars = "!@#$%^&*()_+";
      const allChars = numberChars + upperChars + lowerChars + symbolChars; 
    
      let randomString = '';
    
      for (let i = 0; i < 12; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber];
      }
    setPassword(randomString);
    }


    return (
        <div >
            <h1>Generate Password</h1>
            <input
                className='input-pass' 
                type="text" 
                name="name" 
                placeholder='Generate Password' 
                value={password} 
                onChange={event => setPassword(event.target.value)}
                onFocus={() => { navigator.clipboard.writeText(password)}} 
                />
            <button onClick={generatePassword}>Click me</button>
            <button onClick={() => { navigator.clipboard.writeText(password)}}>Copy Pass</button>
        </div>
      );

}

export default Generate;