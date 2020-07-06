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
  
  return(
  	 
      <Router history={history}>
      <div>
        <Header/>
        <Routes/>
      </div>
      </Router>
  );

}

export default App;
