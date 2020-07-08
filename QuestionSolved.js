import React from "react"
import Routes from './routes/index'
import Conditional from './Conditional'
import Question from './Question'

function QuestionSolved (props) {

    const mine=props¸question.userAnswer;
    const right=props.question.rightAnswer;

        return (
        
<div><form>
	<label for="question">{props.question.id}. {props.question.question}</label>
        <p>Your answer:</p>
        <div className="solution">{mine}</div> <Conditional right={right} mine={mine}/>
        <p>Right answer:</p>
  		  <div className="solution">{right}</div>

    <hr/>
</form>
</div>

);
    }


export default QuestionSolved;
