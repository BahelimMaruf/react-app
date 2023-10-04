import React, { useState } from "react";
import "./PasswordGenerator.css";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increaseValue } from "./features/showSlice";

const demoEmail = [
  "sonu@gmail.com",
  "maruf@gmail.com",
  "aftab@gmail.com",
  "bahelim@gmail.com",
  "sohil@gmail.com",
  "afzal@gmail.com",
  "nasim@gmail.com",
  "raj@gmail.com",
  "samir@gmail.com",
  "ahad@gmail.com",
];

const Passwordgenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("10");
  const [email, setEmail] = useState("");
  const [addUppercase, setAddUppercase] = useState(true);
  const [addLowercase, setAddLowercase] = useState(false);
  const [addNumbers, setAddNumbers] = useState(true);
  const [addSpecialCharacters, setAddSpecialCharacters] = useState(false);

  const sliderPassword = (e) => {
    setPasswordLength(e.target.value);
  };

  const handleuppercasechange = (e) => {
    setAddUppercase(e.target.checked);
  };

  const handlelowercasechange = (e) => {
    setAddLowercase(e.target.checked);
  };

  const handlenumberchange = (e) => {
    setAddNumbers(e.target.checked);
  };

  const handlespecialcharacterschange = (e) => {
    setAddSpecialCharacters(e.target.checked);
  };

  const genratePassword = () => {
    const lengthPassword = passwordLength;
    const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = 1234567890;
    const SpecialCharacters = "@#!&*$";

    let Characters = "";

    if (addUppercase) {
      Characters += UppercaseLetters;
    }
    if (addLowercase) {
      Characters += LowercaseLetters;
    }
    if (addNumbers) {
      Characters += Numbers;
    }
    if (addSpecialCharacters) {
      Characters += SpecialCharacters;
    }

    let newPassword = "";

    for (let i = 0; i < lengthPassword; i++) {
      const randomPassword = Math.floor(Math.random() * Characters.length);
      newPassword += Characters[randomPassword];
    }
    setPassword(newPassword);
  };

  const generateEmail = () => {
    const index = demoEmail[Math.floor(Math.random() * demoEmail.length)];
    setEmail(index);
  };

  // const dispatch = useDispatch();

  // const data = useSelector((c)=>
  //   c.show.value
  // )

  return (
    <div className='container1'>
      <div className='content'>
        <div className='custom-container'>
          {/* <h2>Email-Password Generator</h2> */}

          <input
            className='form-control'
            type='text'
            value={email}
            placeholder='Email'
            id='form1Example1'
            style={{ width: "350px", marginTop: "70px" }}
            readOnly
          />

          <input
            className='form-control'
            type='text'
            value={password}
            placeholder='Password'
            id='form1Example1'
            style={{ width: "350px", marginTop: "-30px" }}
            readOnly
          />

          <div className='slider'>
            <label htmlFor='passwordLength' className='passwordLength'>
              Password Length: {passwordLength}
            </label>
            <input
              type='range'
              min={5}
              max={25}
              value={passwordLength}
              onChange={sliderPassword}
              className='slider-input'
            />
          </div>

          <div className='checkboxes'>
            <div className='checkbox-wrapper'>
              <input
                type='checkbox'
                name='uppercase'
                checked={addUppercase}
                id='uppercase'
                className='checkbox-input'
                onChange={handleuppercasechange}
              />
              <label className='form-label' htmlFor='uppercase'>
                uppercase
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input
                type='checkbox'
                name='lowercase'
                checked={addLowercase}
                id='lowercase'
                className='checkbox-input'
                onChange={handlelowercasechange}
              />
              <label className='form-label' htmlFor='uppercase'>
                lowercase
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input
                type='checkbox'
                name='numbers'
                checked={addNumbers}
                id='numbers'
                className='checkbox-input'
                onChange={handlenumberchange}
              />
              <label className='form-label' htmlFor='uppercase'>
                numbers
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input
                type='checkbox'
                name='specialcharacters'
                checked={addSpecialCharacters}
                id='specialcharacters'
                className='checkbox-input'
                onChange={handlespecialcharacterschange}
              />
              <label className='form-label' htmlFor='uppercase'>
                specialcharacters
              </label>
            </div>
          </div>

          <button
            type='submit'
            className='generate-button'
            onClick={() => {
              genratePassword();
              generateEmail();
            }}>
            Generate
          </button>

          {/* <h3>Hi - {data}</h3> */}
        </div>
        {/* <button onClick={()=>dispatch(decrement())}>click me</button>
        <button onClick={()=>dispatch(increaseValue(50))}>increaseValue</button> */}
      </div>
    </div>
  );
};

export default Passwordgenerator;
