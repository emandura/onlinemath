import React from "react"
import QuestionSolved from './QuestionSolved'
import data from './data.js';

function Soulitons () {
   
     const questionComponents = data.map(item => <QuestionSolved key={item.id} question={item}/>)
       
        return (
        
<div class="test"><form>
	   {questionComponents}
       <button>Comments</button>
</form>
</div>

);


}

export default Soulitons;