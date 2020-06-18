import React from "react"
import tick from './tick.png'; 
import x from './x.png'; 
import QuestionSolved from './QuestionSolved'


function Conditional(props) {
    return (
        <div className="image">
           	{(props.mine===props.right) ? <img src={tick} alt="Correct"/> : <img src={x} alt="Incorrect"/>}       
        </div>
    )
    
}

export default Conditional