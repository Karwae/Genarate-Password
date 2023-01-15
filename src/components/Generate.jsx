import React from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Generate = () => {
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(7);

  function generatePassword() {
    let numberChars;
    let upperChars;
    let lowerChars;
    let symbolChars;

    if (document.querySelector(".lowercase").checked) {
      lowerChars = "abcdefghijklmnopqrstuvwxyz";
    } else {
      lowerChars = "";
    }
    if (document.querySelector(".uppercase").checked) {
      upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      upperChars = "";
    }
    if (document.querySelector(".symbols").checked) {
      symbolChars = "!@#$%^&*()_+";
    } else {
      symbolChars = "";
    }
    if (document.querySelector(".number").checked) {
      numberChars = "0123456789";
    } else {
      numberChars = "";
    }

    let checkbox = document.querySelectorAll("input[type='checkbox']");
    if (
      checkbox[0].checked === false &&
      checkbox[1].checked === false &&
      checkbox[2].checked === false &&
      checkbox[3].checked === false
    ) {
      alert("Please choose any checkbox");
      document.querySelector(".input-pass").value();
    }

    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomString = "";

    for (let i = 0; i < value; i++) {
      let randomNumber = Math.floor(Math.random() * allChars.length);
      randomString += allChars[randomNumber];
    }

    setPassword(randomString);
  }
  let passIndicator = document.querySelector(".pass-indicator");
  function updatePassIndicator (value) {
    setValue(value);
    document.querySelector(".value-length").textContent=(value);
    passIndicator.id = value <= 8 ? "weak" : value <= 16 ? "medium" : "strong";
}

  return (
    <div className="container">
        <h2>Password Generator</h2>
        <div class="input-box">
          <input
            className="input-pass"
            type="text"
            name="name"
            placeholder="Generate Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => {
              navigator.clipboard.writeText(password);
            }}
          />
          <div className="pass-indicator"></div>
          <div className="pass-length">
              <label>Password Length</label>
              <span className="value-length">7</span>
          </div>
            <InputRange
              maxValue={25}
              minValue={0}
              value={value}
              onChange={(value) => updatePassIndicator (value)}
            />
          {/* <button onClick={() => {navigator.clipboard.writeText(password)}}>Copy Pass</button> */}
        </div>
        <div className="checkbox-box">
          <div className="option">
            <input type="checkbox" className="lowercase" defaultChecked={true}/>
            <label>Lowercase (a-z)</label>
          </div>
          <div className="option">
            <input type="checkbox" className="uppercase" />
            <label>Uppercase (A-Z)</label>
          </div>
          <div className="option">
            <input type="checkbox" className="number" defaultChecked={true} />
            <label>Numbers (0-9)</label>
          </div>
          <div className="option">
            <input type="checkbox" className="symbols" />
            <label>Symbols (!-$^+)</label>
          </div>
        </div>
        <button className="generate" onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default Generate;
