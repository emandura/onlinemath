import React from "react";
import Routes from './routes/index'
import {Link} from 'react-router-dom'

function Menu() {

    return (
        <div className="row">
        	<div className="columnM"><Link to={{pathname:'/chapters/1'}}>First grade</Link></div>
  			<div className="columnM"><Link to={{pathname:'/chapters/2'}}>Second grade</Link></div>
  			<div className="columnM"><Link to={{pathname:'/chapters/3'}}>Third grade</Link></div>
  			<div className="columnM"><Link to={{pathname:'/chapters/4'}}>Fourth grade</Link></div>
		</div>
    )
}

export default Menu