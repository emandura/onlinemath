import React from "react"
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import Search from 'react-search-field';
import './index.css';

import search from './search-icon.png'; 

function Header() {
    return (
      <div className="search">
       <input type="text"/><div className="search-icon"><img src={search}/></div>
      </div>


    )
}

export default Header

