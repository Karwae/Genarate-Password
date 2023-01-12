import React from 'react';
import { useState } from 'react';

const Generate = () =>{

    const [password, setPassword] = useState('');


    
    function generatePassword() {

      let numberChars ;
      let upperChars  ;
      let lowerChars  ;
      let symbolChars ;

      if (document.querySelector(".lowercase").checked) {
        lowerChars = 'abcdefghijklmnopqrstuvwxyz';
      }else{
        lowerChars = '';
      }
      if (document.querySelector(".uppercase").checked) {
        upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }else{
        upperChars = '';
      }
      if (document.querySelector(".symbols").checked) {
        symbolChars = '!@#$%^&*()_+';
      }else{
        symbolChars = '';
      } 
      if (document.querySelector(".number").checked) {
        numberChars = '0123456789';
      }else{
        numberChars = '';
      }

      let length_pass = document.querySelector(".length_pass").value;
      console.log(length_pass);
      if(length_pass = ' '){
        length_pass = 12;
      }

      let checkbox = document.querySelectorAll("input[type='checkbox']");
        if (checkbox[0].checked === false && checkbox[1].checked === false && checkbox[2].checked === false && checkbox[3].checked === false) {
          alert('Please choose any checkbox');
          document.querySelector(".input-pass").value();
          
    }


      const allChars = numberChars + upperChars + lowerChars + symbolChars; 
    

      let randomString = '';
    
      for (let i = 0; i < 10; i++) {
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
            <div className="form">
              <div className="option">
                 <label htmlFor="">Length Password</label>
                  <input type="number" className='length_pass' placeholder='12' />
              </div>
              <div className="option">
                 <label htmlFor="">Lower Case</label>
                  <input type="checkbox" className='lowercase' defaultChecked={true}/>
              </div>
              <div className="option">
                 <label htmlFor="">Upper Case</label>
                  <input type="checkbox" className='uppercase' />
              </div> 
              <div className="option">
                 <label htmlFor="">Symbols</label>
                  <input type="checkbox" className='symbols' />
              </div>
              <div className="option">
                 <label htmlFor="">Number</label>
                  <input type="checkbox" className='number' defaultChecked={true}/>
              </div> 
              <button onClick={generatePassword}>Generate</button>   
              <button onClick={() => { navigator.clipboard.writeText(password)}}>Copy Pass</button>  
            </div>
        </div>
      );

}

export default Generate;