import React from "react"
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import './index.css';
import UserProfile from './UserProfile';

function Header() {
    return (
        <header>
       <p>Math online</p>
            <div className="dropdown">
  <Link to={{pathname: "/menu"}}><button className="dropbtn">Menu</button></Link>
  <div className="dropdown-content">
    <Link to={{pathname: "/chapters/1"}}>First Grade</Link>
    <Link to={{pathname: "/chapters/2"}}>Second Grade</Link>
  	<Link to={{pathname: "/chapters/3"}}>Third Grade</Link>
    <Link to={{pathname: "/chapters/4"}}>Fourth Grade</Link>
  </div>
</div>
    <Link to={{pathname: "/Login"}}><button className="logout" onClick={UserProfile.setEmail()}>Log out</button></Link>

        </header>

    )
}

export default Header

