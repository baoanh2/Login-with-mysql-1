import { useState,useEffect } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [usernameReg, setUsernameReg] = useState();
  const [passwordReg, setPasswordReg] = useState();

  const register =()=>{
    axios.post("http://localhost:3001/register",{
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="App">
      <div className='register-container'>
        <h1>Register</h1>
        <label htmlFor='username-reg'>Username:</label>
        <input onChange={(e)=>setUsernameReg(e.target.value)} id='username-reg' placeholder='Enter username...'></input>
        <br></br>
        <label htmlFor='password-reg'>Password:</label>
        <input onChange={(e)=>setPasswordReg(e.target.value)} id='password-reg' placeholder='Enter password...'></input>
        <br/>
        <button onClick={register} id='register-button'>Register</button>
      </div>

      <div className='login-container'>
        <h1>Login</h1>
        <label htmlFor='username-login'>Username:</label>
        <input id='username-login' placeholder='Enter username...'></input>
        <br></br>
        <label htmlFor='password-login'>Password:</label>
        <input id='password-login' placeholder='Enter password...'></input>
        <br/>
        <button id='login-button'>Login</button>
      </div>
    </div>
  );
}

export default App;
