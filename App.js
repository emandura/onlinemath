import React, { useState }  from 'react';
import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import StartTest from './StartTest'
import Test from './Test'
import {  Router } from 'react-router-dom'; 
import Login from './Login'
import CreateTest from './CreateTest'
import Routes from './routes/index'
import history from './services/history'
import { AuthContext } from "./auth";

function App() {
  	/*const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  	const [authTokens, setAuthTokens] = useState(existingTokens);
  
 	const setTokens = (data) => {
    	localStorage.setItem("tokens", JSON.stringify(data));
    	setAuthTokens(data);
  }*/

  return(
  	 //<AuthContext.Provider value={false}>
      <Router history={history}>
      <div>
        <Header/>
        <Routes/>
      </div>
      </Router>
    // </AuthContext.Provider>
  );

}

export default App;
