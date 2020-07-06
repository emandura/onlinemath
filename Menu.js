import React from "react";
import Routes from './routes/index'

function Menu() {

    return (
        <div className="row">
        	<div className="columnM"><a href='/chapters/1'>First grade</a></div>
  			<div className="columnM"><a href='/chapters/2'>Second grade</a></div>
  			<div className="columnM"><a href='/chapters/3'>Third grade</a></div>
  			<div className="columnM"><a href='/chapters/4'>Fourth grade</a></div>
		</div>
    )
}

export default Menu