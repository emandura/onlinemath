import React from "react";
import Routes from './routes/index'

function Menu() {

    return (
        <div className="row">
        	<div className="columnM"><a href='/chapters'>First grade</a></div>
  			<div className="columnM"><a href='/chapters'>Second grade</a></div>
  			<div className="columnM"><a href='/chapters'>Third grade</a></div>
  			<div className="columnM"><a href='/chapters'>Fourth grade</a></div>
		</div>
    )
}

export default Menu