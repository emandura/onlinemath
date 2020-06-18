import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from 'C:/Users/Ema/diplomski/src/auth'


function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //const { setAuthTokens } = useAuth();

  function postLogin() {
    axios.post("https://www.somePlace.com/auth/login", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
       // setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/Menu" />;
  }

  return (
  	<div className="testStart">
    <form className="login">
      <label for="uname"><b>E-mail</b></label>
      <input
          type="text"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="Enter e-mail"
        />
      <label for="psw"><b>Password</b></label>
      <input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />  
      <button onClick={postLogin} type="submit"><a href='/Menu'>Login</a></button>
     </form>
    </div>

  );
}

export default Login;


